import GoldButton from "./GoldButton"
import OutlineButton from "./OutlineButton"
import GoldDots from '../public/img/gold-dots.svg'
import Image from 'next/image'

export default function HomeSlider() {
    return (
        <div className="relative bg-spLightGrey">
          <div className="max-w-7xl mx-auto px-4 py-[8em] flex justify-between">
            <div className='space-y-5'>
              <h1 className='text-spBlueGrey text-6xl font-thin'>Outsmart complexity</h1>
              <p className='text-spBlueGrey m-0 font-light'>Stay ahead of increasing complexity, and deliver the<br /> outcomes you set out to achieve.</p>
              <div className='flex space-x-4'>
                <GoldButton buttonName='Why SP?' link="/contact" />
                <OutlineButton buttonName='Product' link="/contact" />
              </div>
            </div>
            <Image src={GoldDots} alt="Gold Dots" />
          </div>
        </div>
    )
}