'use client'

import { Point } from '@/services/traffic-image-map'
import axios from 'axios'
import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { MapRef } from 'react-map-gl/maplibre'

type PointsContextValue = {
  points: Point[]
  mapRef: RefObject<MapRef>
  selectedPoint: [
    Point | undefined,
    Dispatch<SetStateAction<Point | undefined>>
  ]
  fullscreen: [boolean, Dispatch<SetStateAction<boolean>>]
}

export const PointsContext = createContext({} as PointsContextValue)

type PointsProviderProps = {
  children: ReactNode
}

export function PointsProvider(props: PointsProviderProps) {
  const [points, setPoints] = useState<Point[]>([])
  const mapRef = useRef<MapRef>({} as MapRef)
  const selectedPoint = useState<Point>()
  const fullscreen = useState<boolean>(false)

  useEffect(() => {
    axios.get<Point[]>('/api/points').then((res) => setPoints(res.data))
  }, [])

  return (
    <PointsContext.Provider
      value={{ points, mapRef, selectedPoint, fullscreen }}
    >
      {props.children}
    </PointsContext.Provider>
  )
}
