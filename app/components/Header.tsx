'use client'

import { Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6'

export default function Header() {
  return (
    <header className='relative z-20 bg-[#f2f2f2] font-sans'>
      <div className='relative max-w-7xl mx-auto px-6 py-12 md:py-5 flex flex-col items-center md:flex-row md:justify-between'>
        {/* SOCIAL ICONS */}
        <div className='flex gap-5 mb-4 md:mb-0'>
          <Link href='https://www.tiktok.com/@matt_rife' aria-label='TikTok'>
            <FaTiktok className='h-5 w-5 text-black hover:opacity-60 transition' />
          </Link>
          <Link
            href='https://www.instagram.com/mattrife'
            aria-label='Instagram'
          >
            <Instagram className='h-5 w-5 text-black hover:opacity-60 transition' />
          </Link>
          <Link href='https://x.com/mattrife' aria-label='X'>
            <FaXTwitter className='h-5 w-5 text-black hover:opacity-60 transition' />
          </Link>
          <Link
            href='https://www.facebook.com/ItsMattRife'
            aria-label='Facebook'
          >
            <FaFacebookF className='h-5 w-5 text-black hover:opacity-60 transition' />
          </Link>
          <Link
            href='https://www.youtube.com/@MattRifeComedy'
            aria-label='YouTube'
          >
            <FaYoutube className='h-5 w-5 text-black hover:opacity-60 transition' />
          </Link>
        </div>

        {/* LOGO */}
        <div className='mb-4 md:mb-0'>
          <Link href='/'>
            <Image
              src='/MattRife_Full_Logo_Black.webp'
              alt='Logo'
              width={180}
              height={80}
              priority
              className='h-20 w-auto md:h-24'
            />
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className='flex gap-6 text-[16px] md:text-[18px] font-bold uppercase'>
          <Link href='/' className='text-black transition hover:text-red-600'>
            Shows
          </Link>
          <Link href='/' className='text-black transition hover:text-red-600'>
            Book
          </Link>
          <Link href='/' className='text-black transition hover:text-red-600'>
            Shop
          </Link>
        </nav>
      </div>
    </header>
  )
}
