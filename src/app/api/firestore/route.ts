import { storage, db } from '@/config/firebase';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ message: 'Hello World!' });
}
