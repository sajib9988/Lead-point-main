import { sendEmailToAdmin } from '@/lib/nodeMailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    await sendEmailToAdmin({ name, email, subject, message });

    return NextResponse.json({ success: true, message: '✅ Message sent to admin!' });
  } catch (error: any) {
    console.error('❌ Email send error:', error);
    return NextResponse.json(
      { success: false, message: '❌ Failed to send message. Try again later.' },
      { status: 500 }
    );
  }
}
