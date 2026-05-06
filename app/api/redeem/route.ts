import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      ticketType,
      organization,
      instagram,
      school,
      graduatingClass,
    } = data;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "YOUR EMAIL HERE",
      subject: `NEW ${ticketType} CLAIM`,
      html: `
        <h2>New Ticket Claim</h2>

        <p><strong>Ticket Type:</strong> ${ticketType}</p>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        ${
          organization
            ? `<p><strong>Organization:</strong> ${organization}</p>`
            : ""
        }

        ${
          instagram
            ? `<p><strong>Instagram:</strong> ${instagram}</p>`
            : ""
        }

        ${
          school
            ? `<p><strong>School:</strong> ${school}</p>`
            : ""
        }

        ${
          graduatingClass
            ? `<p><strong>Graduating Class:</strong> ${graduatingClass}</p>`
            : ""
        }
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
