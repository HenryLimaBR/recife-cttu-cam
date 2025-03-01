'use client'

import { PointsContext } from '@/contexts/PointsProvider'
import { X } from '@phosphor-icons/react'
import Image from 'next/image'
import { useContext } from 'react'

export function FloatPreviewComponent() {
  const {
    selectedPoint: [selectedPoint],
    fullscreen: [fullscreen, setFullscreen],
  } = useContext(PointsContext)

  if (!selectedPoint || !fullscreen) {
    return null
  }

  return (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-zinc-800">
      <div className="relative w-full aspect-video">
        <Image
          src={selectedPoint.url}
          alt={selectedPoint.name}
          fill
          unoptimized
        />
      </div>

      <button
        className="absolute top-4 right-4 text-red-400 text-xl bg-red-400 bg-opacity-25 rounded z-20"
        onClick={() => setFullscreen(false)}
      >
        <X />
      </button>
    </div>
  )
}
