import Head from 'next/head'

import { Homepage } from '../page-components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MAME&apos;S PORTFOLIO</title>
        <meta name="description" content="Portfolio page for Omomame Imafidon" />
        <link rel="icon" href="/favicon1.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Homepage />

    </div>
  )
}
