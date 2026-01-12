import { Ticket } from '@/lib/tickets'

// Detect mobile
function isMobile() {
  if (typeof navigator === 'undefined') return false
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
}

export function generateTicketEmail(ticket: Ticket) {
  const to = 'mattrife.management1@outlook.com'

  const subject = `Ticket Request – ${ticket.city}`

  const body = `
Hello Matt Rife Management,

I hope you are doing well.

I would like to request tickets for the following show:

City: ${ticket.city}
Venue: ${ticket.venue}
Date: ${ticket.date}
${ticket.time ? `Time: ${ticket.time}` : ''}

Please let me know if tickets are available and how I can proceed to secure them.

Thank you for your time and assistance.

Best regards,
[Your Name]
`.trim()

  if (isMobile()) {
    // Mobile → open default mail app instantly
    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    return mailto
  } else {
    // Desktop → Gmail web compose
    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to,
      su: subject,
      body,
    })
    return `https://mail.google.com/mail/?${params.toString()}`
  }
}
