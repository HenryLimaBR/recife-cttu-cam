import { Point } from '@/services/traffic-image-map'

const distanceFormater = new Intl.NumberFormat('pt-BR', {
  style: 'unit',
  unitDisplay: 'short',
  unit: 'kilometer',
  maximumFractionDigits: 2,
})

function degToRad(n: number): number {
  return n * (Math.PI / 180)
}

function calculateDistance(ax: number, ay: number, bx: number, by: number) {
  // haversine formula 
  const R = 6371.0088

  const deltaX = degToRad(bx - ax)
  const deltaY = degToRad(by - ay)

  const alpha = Math.sin(deltaX / 2) ** 2 + Math.cos(degToRad(ax)) * Math.cos(degToRad(bx)) * Math.sin(deltaY / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(alpha), Math.sqrt(1 - alpha))

  return R * c
}

export function calculatePointsDistance(a: Point, b: Point): string {
  const distance = calculateDistance(a.lat, a.long, b.lat, b.long)

  return distanceFormater.format(distance).toString()
}