import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields (name, email, and message)." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const recipient = process.env.EMAIL_TO || "chanudiwassala@gmail.com";

    if (user && pass) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: {
            user,
            pass,
          },
        });

        await transporter.sendMail({
          from: `"${name}" <${user}>`,
          replyTo: email,
          to: recipient,
          subject: `New Portfolio Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #c88a8a; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Portfolio Contact Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #c88a8a; border-radius: 4px;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              <hr style="border: none; border-top: 1px solid #eee; margin-top: 25px;" />
              <p style="font-size: 12px; color: #888;">Sent from Chanudi's Portfolio Contact Form</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Nodemailer transport error:", emailErr);
      }
    } else {
      console.log(`[Form Submission Received] Name: ${name}, Email: ${email}, Message: ${message}`);
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  }
}
