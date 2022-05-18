import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { PointsContextProvider } from '../contexts/pointsContext'

import '../styles/global.scss'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CTTU Recife Câmeras</title>
      </Head>

      <PointsContextProvider>
        <Component {...pageProps} />
      </PointsContextProvider>
    </>
  )
}

export default MyApp
