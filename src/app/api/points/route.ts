import { getPoints } from '@/services/traffic-image-map'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(await getPoints())
}