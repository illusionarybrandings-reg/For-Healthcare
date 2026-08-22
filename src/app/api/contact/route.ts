import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, phone, email, reason, message } = body;

    if (!firstName || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required contact details." },
        { status: 400 }
      );
    }

    console.log("[API CONTACT RECEIVED]:", {
      name: firstName,
      phone,
      email,
      reason,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: `Message received! Thank you ${firstName}, our healthcare team will respond within 2 hours.`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
