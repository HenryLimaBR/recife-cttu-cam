import React, { useState, useEffect, createContext, useCallback } from 'react'
import axios from 'axios'
import { Point, pointsMapify } from '../services/getPoints'
import type { State } from '../@types/Generic'

interface PointsContextProps {
  points: Map<string, Point>
  removePoint: (point: Point) => void
  previewPointState: State<Point | null>
}

export const PointsContext = createContext({} as PointsContextProps)

interface PointsContextProviderProps {
  children: React.ReactNode
}

export const PointsContextProvider: React.FC<PointsContextProviderProps> = ({ children }) => {
  const [points, setPoints] = useState<Map<string, Point>>(new Map())
  const [previewPoint, setPreviewPoint] = useState<Point | null>(null)

  useEffect(() => {
    const fetchPoints = async () => {
      const points = await axios.get<Point[]>('/api/points')
      setPoints(pointsMapify(points.data))
    }

    fetchPoints()
    const pointFetchInterval = setInterval(fetchPoints, 60000)

    return () => {
      clearInterval(pointFetchInterval)
    }
  }, [])

  const removePoint = useCallback((point: Point) => {
    setPoints((prev) => {
      const newPoints = new Map(prev)
      newPoints.delete(point.ip)
      return newPoints
    })
  }, [])

  return (
    <PointsContext.Provider value={{
      points,
      removePoint,
      previewPointState: [previewPoint, setPreviewPoint],
    }}>
      {children}
    </PointsContext.Provider>
  )
}