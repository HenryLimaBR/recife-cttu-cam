'use client'

import { PointsContext } from '@/contexts/PointsProvider'
import { Point } from '@/services/traffic-image-map'
import { calculatePointsDistance } from '@/utils/map-tools'
import { CheckCircle, MapPin } from '@phosphor-icons/react'
import { useContext } from 'react'

interface ListItemComponentProps {
  point: Point
}

export function ListItemComponent({ point }: ListItemComponentProps) {
  const {
    selectedPoint: [selectedPoint, setSelectedPoint],
    mapRef,
  } = useContext(PointsContext)

  const distance =
    selectedPoint && point.ip !== selectedPoint?.ip
      ? calculatePointsDistance(point, selectedPoint)
      : undefined

  return (
    <li className="p-2 flex flex-row justify-center items-center gap-2 bg-zinc-500 text-zinc-50 rounded">
      <div className="flex">
        {point.ip !== selectedPoint?.ip ? (
          <button
            className="p-2 bg-blue-200 rounded hover:bg-blue-50 transition-colors"
            title="Ver no mapa"
            onClick={() => {
              setSelectedPoint(point)

              mapRef.current.flyTo({
                center: [point.long, point.lat],
                // zoom: 15, // <- Parece um pouco chato caso tenha pontos próximos.
              })
            }}
          >
            <MapPin className="text-blue-700" weight="fill" />
          </button>
        ) : (
          <span className="p-2 bg-green-200 rounded">
            <CheckCircle className="text-green-500" weight="fill" />
          </span>
        )}
      </div>

      <span className="flex-1">{point.name}</span>

      {distance && (
        <span title={`${distance} de ${selectedPoint?.name}`}>{distance}</span>
      )}
    </li>
  )
}
