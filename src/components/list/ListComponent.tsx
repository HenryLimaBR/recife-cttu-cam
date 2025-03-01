'use client'

import { PointsContext } from '@/contexts/PointsProvider'
import { useContext } from 'react'
import { ListItemComponent } from './ListItemComponent'

export function ListComponent() {
  const { points } = useContext(PointsContext)

  return (
    <div className="w-2/5 h-full overscroll-x-none overflow-y-auto bg-zinc-700">
      <ul className="p-2 flex flex-col gap-2">
        {points.map((point) => (
          <ListItemComponent key={point.ip} point={point} />
        ))}
      </ul>
    </div>
  )
}
