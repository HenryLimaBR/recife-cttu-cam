import React, { useState, useEffect, createContext, useCallback } from 'react'
import axios from 'axios'
import { Point, pointsMapify } from '../services/getPoints'
import type { State } from '../@types/Generic'

interface PointsContextProps {
  points: Map<string, Point>
  removePoint: (point: Point) => void
  previewPointState: State<Point | null>
  searchState: State<string>
}

export const PointsContext = createContext({} as PointsContextProps)

interface PointsContextProviderProps {
  children: React.ReactNode
}

export const PointsContextProvider: React.FC<PointsContextProviderProps> = ({ children }) => {
  const [points, setPoints] = useState<Map<string, Point>>(new Map())
  const [previewPoint, setPreviewPoint] = useState<Point | null>(null)
  const [search, setSearch] = useState<string>('')

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
      const next = new Map(prev)
      next.delete(point.ip)
      return next
    })
  }, [])

  return (
    <PointsContext.Provider value={{
      points,
      removePoint,
      previewPointState: [previewPoint, setPreviewPoint],
      searchState: [search, setSearch]
    }}>
      {children}
    </PointsContext.Provider>
  )
}