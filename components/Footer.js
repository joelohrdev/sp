import Image from 'next/image'
import FooterLogo from '../public/img/footer-logo.svg'
import GoldButton from '../components/GoldButton'

export default function Footer() {
    return (
        <div className="bg-spBlueGrey relative">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-6 sm:px-6 md:justify-start md:space-x-10">
                <div>
                    <Image src={FooterLogo} alt="Logo" className="w-auto h-auto" />
                    <p className='text-spLightGrey font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</p>
                    <GoldButton buttonName="Contact Us" link="/contact" />
                </div>
            </div>
        </div>
    )
}