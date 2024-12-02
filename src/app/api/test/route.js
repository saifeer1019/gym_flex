import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function GET(request) {
  await connectDB();
  const users = await User.find();
  return NextResponse.json({ 'users': users });
}