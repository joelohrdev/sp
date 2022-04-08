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
        <PageHeader pageTitle="Our Product: Attain" />
        <SubTitle title="SP Attain is a first-of-its-kind Software as a Service (SaaS) which provides full organizational scaffolding to ensure that enterprises’ day-to-day activities and investments build towards their ultimate outcomes." />
      </main>

    </div>
  )
}
