'use client'

import { PointsContext } from '@/contexts/PointsProvider'
import { CircleNotch } from '@phosphor-icons/react'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'

export function PreviewComponent() {
  const {
    selectedPoint: [selectedPoint],
    fullscreen: [fullscreen, setFullscreen],
  } = useContext(PointsContext)

  const [cameraIsLoading, setCameraIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setCameraIsLoading(true)
  }, [selectedPoint])

  if (!selectedPoint || fullscreen) {
    return null
  }

  return (
    <div className="absolute top-4 left-4 p-2 flex flex-col justify-center items-center gap-2 rounded aspect-video bg-zinc-700 z-20">
      <div className="relative w-full h-full flex justify-center items-center overflow-hidden rounded group cursor-pointer">
        <Image
          className="-z-10 bg-black text-white"
          src={selectedPoint.url}
          alt={selectedPoint.name}
          fill
          sizes="480"
          unoptimized
          onError={() => setCameraIsLoading(false)}
          onLoad={() => setCameraIsLoading(false)}
        />

        <div
          className="w-full h-full flex justify-center items-center text-center bg-zinc-950 bg-opacity-50 z-0 invisible group-hover:visible"
          onClick={() => setFullscreen(true)}
        >
          <span className="px-2 text-xl text-zinc-50">
            Clique Para Visualizar em Tela Cheia
          </span>
        </div>

        {cameraIsLoading && (
          <CircleNotch className="absolute z-20 text-white text-5xl animate-spin" />
        )}
      </div>

      <span className="text-zinc-50">{selectedPoint.name}</span>
    </div>
  )
}
