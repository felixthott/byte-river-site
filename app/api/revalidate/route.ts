import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }
  try {
    // Revalidate everything (simple approach)
    // In production, parse Sanity webhook body for specific paths
    await Promise.all([
      // @ts-ignore
      (global as any).revalidatePath ? (global as any).revalidatePath('/') : Promise.resolve()
    ])
    return NextResponse.json({ revalidated: true })
  } catch (e) {
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
