import GoldButton from "./GoldButton"
import OutlineButton from "./OutlineButton"
import FourDots from '../components/FourDots'
import Image from 'next/image'

export default function FiftyFiftyImageRight({title}) {
    return (
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 py-[8em] flex justify-between">
            <div className='space-y-5'>
                <FourDots/>
              <h1 className='text-spBlueGrey text-6xl font-thin'>{title}</h1>
              <p className='text-spBlueGrey m-0'>Stay ahead of increasing complexity, and deliver the<br /> outcomes you set out to achieve.</p>
              <div className='flex space-x-4'>
                <GoldButton buttonName='What We Do' link="/contact" />
                <OutlineButton buttonName='Services' link="/contact" />
              </div>
            </div>
          </div>
        </div>
    )
}