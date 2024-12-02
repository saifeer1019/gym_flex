import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbconnect';
import User from '@/models/User';

export async function GET(request) {
  await dbConnect();
  const users = await User.find();
  return NextResponse.json({ 'users': users });
}