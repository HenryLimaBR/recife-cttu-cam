import axios from 'axios'

const filter = /criaPonto\((-?\d+\.\d+)\s+,(-?\d+\.\d+)\s+,'(\d+\.\d+\.\d+\.\d+)',.+<\/b>(.+)<\/span>.+\);?/

export interface Point {
  lat: number
  long: number
  ip: string
  name: string
  url: string
}

export async function getPoints() {
  const page = await axios.get<string>('http://transito.gtrans.com.br/cttupe/index.php/mapa')
  const rawPoints = page.data.match(/criaPonto\(.+\);/g)!

  const points: Point[] = rawPoints.map((rawPoint) => {
    const [, lat, long, ip, rawName] = filter.exec(rawPoint)!.filter(i => i.match(filter))

    return {
      lat: parseFloat(lat) || 0,
      long: parseFloat(long) || 0,
      ip,
      name: rawName.replace(/[^\x00-\xff]/g, ''),
      url: `http://transito.gtrans.com.br/cttupe/index.php/portal/getImg/${ip}?t=${Date.now()}`,
    }
  })

  return points
}

export function pointsMapify(array: Point[]) {
  return new Map<string, Point>(array.map((point) => [point.ip, point]))
}
