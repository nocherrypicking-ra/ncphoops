import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, ticketType } = await req.json();

    const data = await resend.emails.send({
      from: "NCP Hoops <onboarding@resend.dev>",
      to: email,
      subject: "Your Super 24 Ticket 🎟️",
      html: `
        <h1>You're In.</h1>
        <p>Your ${ticketType} ticket has been successfully claimed.</p>
        <p>Super 24 Invitational — Four States. One Floor.</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false });
  }
}
