import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest, res: any) {
    const data = req.body;
    console.log(data)
    return NextResponse.json({ data });
}