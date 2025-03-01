import { ListComponent } from '@/components/list/ListComponent'
import { MapComponent } from '@/components/map/MapComponent'

export default function Home() {
  return (
    <main className="relative w-full h-screen flex">
      <MapComponent />
      <ListComponent />
    </main>
  )
}
