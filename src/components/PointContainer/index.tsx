import React, { useContext } from 'react'
import { PointsContext } from '../../contexts/pointsContext'
import { PointBox } from '../PointBox'

export const PointContainer: React.FC = () => {
  const { points } = useContext(PointsContext)
  const [search, setSearch] = useContext(PointsContext).searchState

  return (
    <div className='p-3 columns-1 sm:columns-2 md:columns-3 xl:columns-4 overflow-auto'>
      {
        Array.from(points.entries())
          .filter(([, point]) => {
            if (search === '') return true
            return point.ip.includes(search) || point.name.toLowerCase().includes(search)
          })
          .map(([key, point]) => (
            <PointBox key={key} point={point} />
          ))
      }
    </div>
  )
}