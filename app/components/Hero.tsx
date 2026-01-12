import Image from 'next/image'

export default function Hero() {
  return (
    <section className='relative w-full'>
      <div className='relative w-full h-[50vh] sm:h-[55vh] md:h-[75vh] lg:h-[85vh]'>
        <Image
          src='/Website-Header-Horizontal.jpg'
          alt='Hero banner'
          fill
          priority
          className='object-cover object-center sm:object-[center_20%] md:object-[center_1%]'
        />
      </div>
    </section>
  )
}
