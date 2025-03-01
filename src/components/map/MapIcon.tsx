'use client'
import { PointsContext } from '@/contexts/PointsProvider'
import { Point } from '@/services/traffic-image-map'
import { IconProps, VideoCamera } from '@phosphor-icons/react'
import { useContext } from 'react'

interface MapIconProps extends IconProps {
  point: Point
}

export function MapIcon(props: MapIconProps) {
  const {
    selectedPoint: [selectedPoint],
  } = useContext(PointsContext)

  return (
    <VideoCamera
      {...props}
      className={
        props.point.ip === selectedPoint?.ip
          ? 'text-4xl text-green-700'
          : 'text-4xl text-blue-700'
      }
    />
  )
}
