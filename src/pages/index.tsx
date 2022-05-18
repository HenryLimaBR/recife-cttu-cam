import type { NextPage } from 'next'
import { useContext } from 'react'
import { ImagePreview } from '../components/ImagePreview'
import { Navbar } from '../components/Navbar'
import { PointContainer } from '../components/PointContainer'
import { PointsContext } from '../contexts/pointsContext'

const Home: NextPage = () => {
  const [previewPoint] = useContext(PointsContext).previewPointState

  return (
    <>
      {previewPoint && <ImagePreview />}
      <Navbar />
      <PointContainer />
    </>
  )
}

export default Home
