import Link from 'next/link'

export default function OutlineButton({buttonName, link}) {
   return (
    <Link href={link}>
    <a className='text-spBlueGrey border border-spBlueGrey font-light px-8 py-4 uppercase'>{buttonName}</a>
</Link>
   )
}