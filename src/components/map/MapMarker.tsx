'use client'

import { PointsContext } from '@/contexts/PointsProvider'
import { Point } from '@/services/traffic-image-map'
import { useContext } from 'react'
import { Marker } from 'react-map-gl/maplibre'
import { MapIcon } from './MapIcon'

interface MapMarkerProps {
  point: Point
}

export function MapMarker({ point }: MapMarkerProps) {
  const {
    selectedPoint: [, setSelectedPoint],
    mapRef,
  } = useContext(PointsContext)

  return (
    <Marker
      key={point.ip}
      latitude={point.lat}
      longitude={point.long}
      anchor="top"
    >
      <button
        onClick={() => {
          setSelectedPoint(point)

          mapRef.current.flyTo({
            center: [point.long, point.lat],
            // zoom: 15, // <- Parece um pouco chato caso tenha pontos próximos.
          })
        }}
        title={point.name}
      >
        <MapIcon point={point} weight="duotone" />
      </button>
    </Marker>
  )
}
