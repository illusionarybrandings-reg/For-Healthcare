import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phoneNumber, emailAddress, serviceType, prefDate, prefTime, medicalNotes } = body;

    if (!firstName || !phoneNumber || !emailAddress || !serviceType) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // In a production backend, this saves to DB or sends email/SMS alert to coordinator
    console.log("[API BOOKING RECEIVED]:", {
      patient: `${firstName} ${lastName}`,
      phone: phoneNumber,
      email: emailAddress,
      service: serviceType,
      date: prefDate,
      time: prefTime,
      notes: medicalNotes,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: `Thank you, ${firstName}! Your care appointment for ${serviceType} on ${prefDate || 'the requested date'} has been received. Our medical coordinator will call you back at ${phoneNumber} shortly.`,
      bookingId: `HC-${Math.floor(100000 + Math.random() * 900000)}`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
