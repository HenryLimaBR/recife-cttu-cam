import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { PointsContext } from '../../contexts/pointsContext'
import type { Point } from '../../services/getPoints'

interface PointBoxProps {
  point: Point
}

export const PointBox: React.FC<PointBoxProps> = ({ point }) => {
  const { removePoint } = useContext(PointsContext)
  const [, setPreviewPoint] = useContext(PointsContext).previewPointState
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <div
      className='flex flex-col mb-3 p-3 break-inside-avoid bg-emerald-100 shadow-lg animate-fade'
      title={point.name}
    >
      <div
        className={`aspect-[4/3] w-full overflow-hidden rounded-sm flex justify-center items-center cursor-pointer bg-gray-900`}
        onClick={() => setPreviewPoint(point)}
      >
        <Image
          src={point.url}
          alt={point.name}
          quality={100}
          width={640}
          height={480}
          objectFit='fill'
          onError={() => removePoint(point)}
          onLoad={() => setLoading(false)}
        />

        {
          loading && (
            <span className='absolute w-6 h-6 rounded-full ring-4 ring-emerald-500 animate-ping'></span>
          )
        }
      </div>

      <p className='text-center font-bold text-sm select-none mt-2 font-mono'>{point.name}</p>
    </div>
  )
}