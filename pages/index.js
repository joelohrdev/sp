import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import HomeSlider from '../components/HomeSlider'
import FourDots from '../components/FourDots'
import GoldButton from '../components/GoldButton'
import OutlineButton from '../components/OutlineButton'
import iPad from '../public/img/iPad.png'
import Talking from '../public/img/talking.png'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shared Performance</title>
        <meta name="description" content="Outsmart complexity" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />

      <main>
        <HomeSlider />

        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 py-[8em] grid grid-cols-2 gap-12">
            <div className='space-y-5'>
                <FourDots/>
              <h1 className='text-spBlueGrey text-6xl font-thin'>Today&apos;s workplaces are increasingly complex</h1>
              <p className='text-spBlueGrey text-xl font-light'>And, that complexity slows—or even actively disrupts—progress towards your goals.</p>
              <p className='text-spBlueGrey m-0 font-light'>Enter Shared Performance, a best-in-breed product and service provider that unifies teams, purpose, technology, and data under the umbrella of “Outcome Management.”</p>
              <div className='flex space-x-4'>
                <GoldButton buttonName='What We Do' link="/contact" />
                <OutlineButton buttonName='Services' link="/contact" />
              </div>
            </div>
            <div>
              <Image src={iPad} alt="iPad" />
            </div>
          </div>
        </div>

        <div className="relative bg-spLightGrey mx-15">
          <div className="max-w-7xl mx-auto px-20 py-[8em] flex justify-center">
            <div className='space-y-5'>
              <h1 className='text-spLightBlue uppercase text-xl font-medium text-center'>Our Promise</h1>
              <h2 className='text-5xl font-extralight text-center pb-10'>You&apos;ll achieve more with use than without us</h2>
              <div className='grid grid-cols-3 gap-5'>
                <div className='space-y-5 text-center'>
                  <p className='uppercase font-medium text-xl tracking-widest text-center'>Our Approach</p>
                  <p className='text-center text-extralight'>Discover Outcome Management, a simple—yet revolutionary—methodology for determining the most efficient path to achieve your core company goals.</p>
                  <GoldButton buttonName='Approach' link="/contact" />
                </div>
                <div className='space-y-5 text-center'>
                  <p className='uppercase font-medium text-xl tracking-widest text-center'>Our Product</p>
                  <p className='text-center'>Your road to achievement is powered by SP Attain, our best-in-class SaaS that helps you see (and achieve) your big picture more reliably.</p>
                  <GoldButton buttonName='Product' link="/contact" />
                </div>
                <div className='space-y-5 text-center'>
                  <p className='uppercase font-medium text-xl tracking-widest text-center'>Our Services</p>
                  <p className='text-center'>Let us help you get up and running with comprehensive Outcome Management training and integration of our industry-defining tools.</p>
                  <GoldButton buttonName='Services' link="/contact" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 py-[8em] grid grid-cols-2 gap-12">
          <div>
              <Image src={Talking} alt="iPad" />
            </div>
            <div className='space-y-5'>
              <p className='uppercase font-medium tracking-widest text-xl text-spGold'>Who We Serve</p>
              <h1 className='text-spBlueGrey text-6xl font-thin'>We serve individuals and organizations</h1>
              <p className='text-spBlueGrey m-0 font-light'>Organizations have long-term goals and outcomes that are dependent on the performance of employees, contractors, and partners. At the same time, these individuals need to balance their personal and professional outcomes in order to contribute to the achievement the larger organizational goals.</p>
              <div className='flex space-x-4'>
                <GoldButton buttonName='Learn More' link="/contact" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-spLightGrey mx-15">
          <div className="max-w-7xl mx-auto px-4 py-[8em] flex justify-center">
            <div className='space-y-5'>
              <h1 className='text-spLightBlue uppercase text-xl font-medium text-center'>Our Promise</h1>
              <h2 className='text-5xl font-extralight text-center pb-10'>You&apos;ll achieve more with use than without us</h2>
              <div className='grid grid-cols-3 gap-5'>
                <div className='space-y-5 text-center'>
                  <p className='uppercase font-medium text-xl tracking-widest text-center'>Our Approach</p>
                  <p className='text-center'>Discover Outcome Management, a simple—yet revolutionary—methodology for determining the most efficient path to achieve your core company goals.</p>
                  <GoldButton buttonName='Approach' link="/contact" />
                </div>
                <div className='space-y-5 text-center'>
                  <p className='uppercase font-medium text-xl tracking-widest text-center'>Our Product</p>
                  <p className='text-center'>Your road to achievement is powered by SP Attain, our best-in-class SaaS that helps you see (and achieve) your big picture more reliably.</p>
                  <GoldButton buttonName='Product' link="/contact" />
                </div>
                <div className='space-y-5 text-center'>
                  <p className='uppercase font-medium text-xl tracking-widest text-center'>Our Services</p>
                  <p className='text-center'>Let us help you get up and running with comprehensive Outcome Management training and integration of our industry-defining tools.</p>
                  <GoldButton buttonName='Services' link="/contact" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 py-[8em] text-center">
            <h1 className='text-6xl font-extralight text-spLightBlue text-center leading-snug'>&quot;Before SP Attain, there was no other systems
              that tied performance, operations and
              strategy together.&quot;</h1>
            <p className='font-medium text-xl mt-5'>Kent McClelland</p>
            <p className='text-xl mt-2'>President and CEO, Shamrock Foods Company</p>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}
