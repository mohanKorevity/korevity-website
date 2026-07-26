import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      email,
      phone,
      service,
      message,
    } = body;

    const { data, error } = await resend.emails.send({
      from: "KoreVity Contact <mohan@korevity.com>",
      to: ["mohan@korevity.com"],

      subject: `New KoreVity Enquiry from ${name}`,

      html: `
      <div style="
        max-width:700px;
        margin:auto;
        font-family:Arial,Helvetica,sans-serif;
        background:#ffffff;
        border:1px solid #e5e7eb;
        border-radius:16px;
        overflow:hidden;
      ">

        <div style="
          background:#0f172a;
          padding:30px;
          text-align:center;
        ">

          <h1 style="
            margin:0;
            color:#22d3ee;
            font-size:30px;
          ">
            KoreVity
          </h1>

          <p style="
            margin-top:10px;
            color:#cbd5e1;
            font-size:15px;
          ">
            Business Intelligence • AI • Automation
          </p>

        </div>


        <div style="padding:35px;">

          <h2 style="
            margin-top:0;
            color:#0f172a;
          ">
            📩 New Website Enquiry
          </h2>

          <p style="
            color:#64748b;
            line-height:1.7;
          ">
            A new enquiry has been submitted through
            <strong>korevity.com</strong>.
          </p>

          <hr style="
            border:none;
            border-top:1px solid #e5e7eb;
            margin:30px 0;
          ">

          <table style="
            width:100%;
            border-collapse:collapse;
          ">

            <tr>
              <td style="
                padding:12px 0;
                font-weight:bold;
                width:180px;
                color:#0f172a;
              ">
                Name
              </td>

              <td style="color:#334155;">
                ${name}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px 0;
                font-weight:bold;
                color:#0f172a;
              ">
                Company
              </td>

              <td style="color:#334155;">
                ${company}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px 0;
                font-weight:bold;
                color:#0f172a;
              ">
                Email
              </td>

              <td>
                <a
                  href="mailto:${email}"
                  style="
                    color:#0891b2;
                    text-decoration:none;
                  "
                >
                  ${email}
                </a>
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px 0;
                font-weight:bold;
                color:#0f172a;
              ">
                Phone
              </td>

              <td style="color:#334155;">
                ${phone || "-"}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px 0;
                font-weight:bold;
                color:#0f172a;
              ">
                Interested In
              </td>

              <td style="color:#334155;">
                ${service}
              </td>
            </tr>

          </table>

          <hr style="
            border:none;
            border-top:1px solid #e5e7eb;
            margin:30px 0;
          ">

          <h3 style="
            color:#0f172a;
            margin-bottom:15px;
          ">
            💬 Message
          </h3>

          <div style="
            background:#f8fafc;
            border-left:5px solid #22d3ee;
            padding:20px;
            border-radius:8px;
            color:#334155;
            line-height:1.8;
            white-space:pre-wrap;
          ">
            ${message}
          </div>

        </div>

        <div style="
          background:#f8fafc;
          padding:20px;
          text-align:center;
          font-size:13px;
          color:#64748b;
        ">
          Submitted from
          <strong>KoreVity Website</strong>
        </div>

      </div>
      `,
    });

    if (error) {
        await resend.emails.send({
  from: "KoreVity <mohan@korevity.com>",

  to: [email],

  subject: "We've received your enquiry | KoreVity",

  html: `
  <div style="max-width:650px;margin:auto;font-family:Arial,sans-serif;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">

    <div style="background:#0f172a;padding:35px;text-align:center;">

      <h1 style="margin:0;color:#22d3ee;">
        KoreVity
      </h1>

      <p style="margin-top:10px;color:#cbd5e1;">
        Business Intelligence • AI • Automation
      </p>

    </div>

    <div style="padding:35px;">

      <h2 style="color:#0f172a;">
        Hi ${name},
      </h2>

      <p style="font-size:16px;line-height:1.8;color:#475569;">
        Thank you for contacting KoreVity.
      </p>

      <p style="font-size:16px;line-height:1.8;color:#475569;">
        We've successfully received your enquiry and our team will review your requirements shortly.
      </p>

      <div style="
        background:#f8fafc;
        padding:25px;
        border-radius:10px;
        border-left:5px solid #22d3ee;
        margin:30px 0;
      ">

        <strong>What happens next?</strong>

        <ul style="margin-top:15px;color:#475569;line-height:1.8;">

          <li>We review your enquiry.</li>

          <li>We identify where we can help.</li>

          <li>We'll contact you within 1 business day.</li>

        </ul>

      </div>

      <p style="color:#64748b;line-height:1.8;">
        If your enquiry is urgent, simply reply to this email.
      </p>

      <br>

      <strong>Mohan Kumar</strong><br>

      Founder, KoreVity

    </div>

    <div style="
      background:#f8fafc;
      padding:18px;
      text-align:center;
      color:#94a3b8;
      font-size:13px;
    ">

      www.korevity.com

    </div>

  </div>
  `,
});
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        { error },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data);

    return NextResponse.json(data);

  } catch (err) {
    console.error("SERVER ERROR:", err);

    return NextResponse.json(
      { error: err },
      { status: 500 }
    );
  }
}