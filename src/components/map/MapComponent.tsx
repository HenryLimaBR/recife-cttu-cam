'use client'

import Map, { NavigationControl, ScaleControl } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useContext, useMemo } from 'react'
import { PointsContext } from '@/contexts/PointsProvider'
import { MapMarker } from '../map/MapMarker'
import { PreviewComponent } from './FloatPreviewComponent'
import { FloatPreviewComponent } from './PreviewComponent'

export function MapComponent() {
  const {
    points,
    mapRef,
  } = useContext(PointsContext)

  const markers = useMemo(
    () => points.map((point) => <MapMarker key={point.ip} point={point} />),
    [points]
  )

  return (
    <div className="relative w-full h-full">
      <Map
        initialViewState={{
          latitude: -8.0838626,
          longitude: -34.8850065,
          zoom: 12,
        }}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=yrbL2aFS4gC2EIAoDPgZ"
        ref={mapRef}
      >
        <ScaleControl unit="metric" />
        <NavigationControl />

        {markers}

        <FloatPreviewComponent />
        <PreviewComponent />
      </Map>
    </div>
  )
}
