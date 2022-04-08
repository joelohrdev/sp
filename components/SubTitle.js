import FourDots from '../components/FourDots'

export default function SubTitle({title}) {
    return (
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 py-[8em] flex flex-col space-y-8">
            <FourDots/>
            <h2 className='text-5xl font-extralight leading-snug'>{title}</h2>
          </div>
        </div>
    )
}