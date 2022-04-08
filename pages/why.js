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
        <PageHeader pageTitle="Why Shared Performance?" />
        <SubTitle title="Shared Performance offers a unique approach, innovative tools, and tailored services that allow you to manage complexity and achieve your goals faster." />
      </main>

    </div>
  )
}
