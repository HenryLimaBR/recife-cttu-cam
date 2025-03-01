import axios from 'axios'
import { load } from 'cheerio'

export interface Point {
  lat: number
  long: number
  ip: string
  name: string
  url: string
}

const filter = /criaPonto\((.+,?)+\);?/g

export async function getPoints(): Promise<Point[]> {
  const page = await axios.get<string>('https://transito.serttel.com.br/cttupe/index.php/mapa')

  const points = [];

  for (const [, group] of page.data.matchAll(filter)) {
    const [lat, long, ip, name] = group.split(',');
  
    if (isNaN(Number(lat))) continue;
  
    points.push({
      lat: parseFloat(lat),
      long: parseFloat(long),
      ip: ip.replace(/\'/g, ''),
      name: load(name).text().replace(/Local:\s|\'|\s\/\s-/g , ''),
      url: `https://transito.serttel.com.br/cttupe/index.php/portal/getImg/${ip.replace(/\'/g, '')}/`
    });
  }

  return points
}

export function pointsMapify(array: Point[]) {
  return new Map<string, Point>(array.map((point) => [point.ip, point]))
}
