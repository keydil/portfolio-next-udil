// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_RECEIVER,
      replyTo: email, 
      subject: `[PORTFOLIO] ${subject}`,
      html: `
    <p><strong>Dari:</strong> ${name} (${email})</p>
    <p><strong>Pesan:</strong></p>
    <p>${message}</p>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
