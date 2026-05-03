import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { code, type } = await req.json();

    if (!code || !type) {
      return NextResponse.json(
        { error: "Missing data" },
        { status: 400 }
      );
    }

    // 📩 CREATE TRANSPORTER (GMAIL)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🧠 FORMAT TIME
    const now = new Date().toLocaleString();

    // 📬 SEND EMAIL
    await transporter.sendMail({
      from: `"NCP Redeem" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🎟️ Ticket Redeemed - ${type}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Ticket Redemption</h2>

          <p><strong>Code:</strong> ${code}</p>
          <p><strong>Ticket Type:</strong> ${type}</p>
          <p><strong>Time:</strong> ${now}</p>

          <hr />

          <p style="color: gray;">NCP Super 24 System</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
