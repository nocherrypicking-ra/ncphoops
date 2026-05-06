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
      participantName,
    } = data;

    const { data: emailData, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "no.cherrypicking@gmail.com",
      subject: `NEW ${ticketType} CLAIM`,
      html: `
        <h2>New Ticket Claim</h2>

        <p><strong>Ticket Type:</strong> ${ticketType}</p>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        ${
          participantName
            ? `<p><strong>Participant Name:</strong> ${participantName}</p>`
            : ""
        }

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

    console.log("EMAIL DATA:", emailData);
    console.log("EMAIL ERROR:", error);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      emailData,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}
