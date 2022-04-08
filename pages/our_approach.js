import Head from 'next/head'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'

export default function OurApproach() {
  return (
    <div>
      <Head>
        <title>Shared Performance | Our Approach</title>
        <meta name="description" content="Stay ahead of increasing complexity, and deliver the outcomes you set out to achieve." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />

      <main>
        <PageHeader pageTitle="Our Approach" />
      </main>

    </div>
  )
}
