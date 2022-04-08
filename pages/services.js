import Head from 'next/head'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import SubTitle from '../components/SubTitle'

export default function Services() {
  return (
    <div>
      <Head>
        <title>Shared Performance | Our Approach</title>
        <meta name="description" content="Stay ahead of increasing complexity, and deliver the outcomes you set out to achieve." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />

      <main>
        <PageHeader pageTitle="Services" />
        <SubTitle title="If you’re new to outcome management and ready to become seasoned pro, we’re here to help you get the most from our time together." />
      </main>

    </div>
  )
}
