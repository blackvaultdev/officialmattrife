'use client'

import { Instagram, Mail, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { FaFacebookF, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6'

export default function MattRifeFooter() {
  const [mode, setMode] = useState<'email' | 'sms'>('email')

  return (
    <footer className='bg-[#f2f2f2] pt-24 pb-10 px-4'>
      {/* Signup card */}
      <div className='mx-auto max-w-md rounded-2xl bg-white px-6 py-5 shadow-sm'>
        <p className='mb-3 text-center text-lg font-sans font-bold text-black'>
          Join Matt’s Mailing List For Updates
        </p>

        {/* Mode toggle */}
        <div className='mb-3 flex justify-center gap-3'>
          <button
            onClick={() => setMode('email')}
            className={`rounded-full p-2 transition ${
              mode === 'email'
                ? 'bg-fuchsia-600 text-white'
                : 'border border-gray-300 text-gray-500'
            }`}
          >
            <Mail size={16} />
          </button>

          <button
            onClick={() => setMode('sms')}
            className={`rounded-full p-2 transition ${
              mode === 'sms'
                ? 'bg-fuchsia-600 text-white'
                : 'border border-gray-300 text-gray-500'
            }`}
          >
            <MessageSquare size={16} />
          </button>
        </div>

        {/* Input */}
        <div className='flex items-center gap-2'>
          <input
            type={mode === 'email' ? 'email' : 'tel'}
            placeholder={
              mode === 'email' ? 'Enter your email' : 'Enter your phone number'
            }
            className='flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-purple-500'
          />

          <button className='rounded-full bg-fuchsia-600 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-600 transition'>
            RSVP
          </button>
        </div>

        {/* Disclaimer */}
        <p className='mt-3 text-[10px] leading-snug text-gray-400'>
          This site is protected by reCAPTCHA. By submitting my information, I
          agree to receive recurring automated and marketing messages to the
          contact information provided and to Laylo’s{' '}
          <span className='underline'>Terms of Service</span>,{' '}
          <span className='underline'>Cookie Policy</span> and{' '}
          <span className='underline'>Privacy Policy</span>.
        </p>

        <p className='mt-2 text-[10px] text-gray-400'>
          Powered by <span className='font-medium'>Laylo</span>
        </p>
      </div>

      {/* Social icons + copyright nav */}
      <div className='mt-6 mx-auto max-w-3xl flex items-center px-0'>
        <div className='flex gap-4 text-black'>
          <FaTiktok size={18} />
          <Instagram size={18} />
          <FaXTwitter size={18} />
          <FaFacebookF size={18} />
          <FaYoutube size={18} />
        </div>

        <p className='ml-auto text-sm font-bold text-black'>© 2024 MATT RIFE</p>
      </div>
    </footer>
  )
}
