import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { PointsContext } from '../../contexts/pointsContext'
import { X } from 'phosphor-react'

export const ImagePreview: React.FC = () => {
  const [previewPoint, setPreviewPoint] = useContext(PointsContext).previewPointState
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [previewPoint])

  return (
    <div
      className='fixed w-full h-screen flex flex-col justify-center items-center bg-[#000a] backdrop-blur-sm z-[1] animate-fade'
      onClick={() => setPreviewPoint(null)}
    >
      <button
        className='absolute top-0 right-0 text-4xl m-4 text-red-700 transition-colors hover:text-red-400'
      >
        <X />
      </button>
      {
        previewPoint && (
          <Image
            src={previewPoint.url}
            alt={previewPoint.name}
            quality={100}
            width='640'
            height='480'
            objectFit='fill'
            onLoad={() => setLoading(false)}
          />
        )
      }

      {
        loading && (
          <span className='absolute w-6 h-6 rounded-full ring-4 ring-emerald-500 animate-ping'></span>
        )
      }
    </div>
  )
}