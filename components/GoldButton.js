import Link from 'next/link'

export default function GoldButton({buttonName, link}) {
   return (
    <Link href={link}>
    <a className='bg-spGold text-white font-light px-8 py-4 uppercase inline-block tracking-widest'>{buttonName}</a>
</Link>
   )
}