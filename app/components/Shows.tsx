import { tickets } from '@/lib/tickets'
import { generateTicketEmail } from '@/lib/utils/generateTicketEmail'

export default function Shows() {
  return (
    <section className='bg-black py-24 font-sans'>
      <div className='max-w-5xl mx-auto px-6'>
        {/* Header */}
        <div className='mb-12 text-center font-grotesk'>
          <h2 className='text-2xl md:text-4xl font-bold uppercase tracking-wide text-white'>
            Tour Dates & Tickets
          </h2>
          <p className='mt-2 text-sm md:text-base font-medium text-white/60'>
            Select a show and secure your tickets
          </p>
        </div>

        {/* Tickets list */}
        <div className='flex flex-col divide-y divide-white/10'>
          {tickets.map((ticket, index) => (
            <div
              key={`${ticket.id}-${index}`}
              className='flex items-center justify-between py-6'
            >
              {/* LEFT — Event info */}
              <div className='flex flex-col font-sans'>
                <span className='text-base md:text-lg font-semibold text-white tracking-tight'>
                  {ticket.date} — {ticket.venue}
                  {ticket.time && ` — ${ticket.time}`}
                  {ticket.lowTickets && (
                    <span className='ml-2 text-xs font-semibold uppercase tracking-wide text-red-500'>
                      Low Tickets
                    </span>
                  )}
                </span>

                <span className='mt-1 text-sm font-medium text-white/60'>
                  {ticket.city}
                </span>
              </div>

              {/* RIGHT — Ticket button */}
              <a
                href={generateTicketEmail(ticket)}
                target='_blank'
                rel='noopener noreferrer'
                className='
                  font-grotesk
                  px-6 py-2
                  text-sm font-bold uppercase tracking-widest
                  text-yellow-400
                  bg-yellow-400/30
                  border-2 border-yellow-400/70
                  rounded-lg
                  transition
                  hover:border-yellow-400
                  hover:bg-yellow-400/40
                '
              >
                Tickets
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
