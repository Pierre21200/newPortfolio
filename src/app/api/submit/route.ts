import { NextRequest, NextResponse } from 'next/server';
export async function POST(req,res) {
    const data = req.body;
    console.log(data)
    return NextResponse.json({ data });
}