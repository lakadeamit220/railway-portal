import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';
import { z } from 'zod';

// Zod schema matching our Mongoose model for server-side validation
const enquirySchema = z.object({
  fullName: z.string().min(2, 'Name is too short').max(100),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number'),
  email: z.string().email('Invalid email address'),
  organization: z.string().max(150).optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  recaptchaToken: z.string().min(1, 'reCAPTCHA token is missing'),
});

export async function POST(req) {
  try {
    const body = await req.json();

    // 1. Validate request body against Zod schema
    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: validationResult.error.format() },
        { status: 400 }
      );
    }

    const { recaptchaToken, ...enquiryData } = validationResult.data;

    // 2. Verify reCAPTCHA token with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY is not defined in .env.local');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
    const recaptchaRes = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaRes.json();

    // Score threshold check (v3 returns a score between 0.0 and 1.0)
    // We assume score >= 0.5 is a valid human.
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // 3. Connect to MongoDB and save enquiry
    await connectDB();
    const newEnquiry = await Enquiry.create(enquiryData);

    return NextResponse.json(
      { success: true, message: 'Enquiry submitted successfully', data: newEnquiry },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing enquiry:', error);
    return NextResponse.json(
      { success: false, message: 'Server error, please try again' },
      { status: 500 }
    );
  }
}
