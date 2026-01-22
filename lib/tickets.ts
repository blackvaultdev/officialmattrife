export type Ticket = {
  id: string
  city: string
  venue: string
  date: string
  time?: string
  lowTickets?: boolean
}

export const tickets: Ticket[] = [
  {
    id: '3',
    city: 'Christchurch, New Zealand',
    venue: 'Wolfbrook Arena',
    date: 'Jan 16 2026',
    lowTickets: true,
  },
  {
    id: '4',
    city: 'Auckland, New Zealand',
    venue: 'Spark Arena',
    date: 'Jan 17 2026',
  },
  {
    id: '5',
    city: 'Brisbane, Australia',
    venue: 'Brisbane Entertainment Centre',
    date: 'Jan 19 2026',
    lowTickets: true,
  },
  {
    id: '6',
    city: 'Adelaide, Australia',
    venue: 'Adelaide Entertainment Centre',
    date: 'Jan 22 2026',
    lowTickets: true,
  },
  {
    id: '7',
    city: 'Melbourne, Australia',
    venue: 'Palais Theatre',
    date: 'Jan 23 2026',
    time: '7:00pm',
  },
  {
    id: '8',
    city: 'Melbourne, Australia',
    venue: 'Palais Theatre',
    date: 'Jan 23 2026',
    time: '9:30pm',
    lowTickets: true,
  },
  {
    id: '9',
    city: 'Melbourne, Australia',
    venue: 'Palais Theatre',
    date: 'Jan 24 2026',
    time: '6:30pm',
  },
  {
    id: '10',
    city: 'Melbourne, Australia',
    venue: 'Palais Theatre',
    date: 'Jan 24 2026',
    time: '9:30pm',
  },
  {
    id: '11',
    city: 'Sydney, Australia',
    venue: 'ICC Sydney Theatre',
    date: 'Jan 30 2026',
  },
  {
    id: '12',
    city: 'Sydney, Australia',
    venue: 'ICC Sydney Theatre',
    date: 'Jan 31 2026',
  },
  {
    id: '13',
    city: 'Sydney, Australia',
    venue: 'Sydney Opera House',
    date: 'Feb 1 2026',
    lowTickets: true,
  },
  {
    id: '14',
    city: 'Perth, Australia',
    venue: 'Perth HPC',
    date: 'Feb 3 2026',
  },
  {
    id: '15',
    city: 'Perth, Australia',
    venue: 'Perth HPC',
    date: 'Feb 4 2026',
  },
  {
    id: '16',
    city: 'Perth, Australia',
    venue: 'Perth HPC',
    date: 'Feb 5 2026',
  },
  {
    id: '17',
    city: 'Singapore',
    venue: 'Singapore Indoor Stadium',
    date: 'Feb 07 2026',
    lowTickets: true,
  },
  {
    id: '18',
    city: 'Newark, New Jersey',
    venue: 'Prudential Center',
    date: 'Feb 28 2026',
  },
  {
    id: '19',
    city: 'Washington, District of Columbia',
    venue: 'Capital One Arena',
    date: 'Mar 1 2026',
  },
  {
    id: '20',
    city: 'Jacksonville, Florida',
    venue: 'VyStar Veterans Memorial Arena',
    date: 'Mar 12 2026',
    lowTickets: true,
  },
  {
    id: '21',
    city: 'Tampa, Florida',
    venue: 'Benchmark International Arena',
    date: 'Mar 13 2026',
    lowTickets: true,
  },
  {
    id: '22',
    city: 'Savannah, Georgia',
    venue: 'Enmarket Arena',
    date: 'Mar 14 2026',
  },
  {
    id: '23',
    city: 'Raleigh, North Carolina',
    venue: 'Lenovo Center',
    date: 'Mar 15 2026',
  },
  {
    id: '24',
    city: 'Louisville, Kentucky',
    venue: 'KFC Yum! Center',
    date: 'Mar 28 2026',
  },
  {
    id: '25',
    city: 'Cincinnati, Ohio',
    venue: 'Heritage Bank Center',
    date: 'Mar 29 2026',
  },
  {
    id: '26',
    city: 'London, United Kingdom',
    venue: 'The O2',
    date: 'Apr 11 2026',
  },
  {
    id: '27',
    city: 'Amsterdam, Netherlands',
    venue: 'Ziggo Dome',
    date: 'Apr 13 2026',
  },
  {
    id: '28',
    city: 'Zurich, Switzerland',
    venue: 'Hallenstadion',
    date: 'Apr 17 2026',
  },
  {
    id: '29',
    city: 'Oslo, Norway',
    venue: 'Unity Arena',
    date: 'Apr 18 2026',
  },
  {
    id: '30',
    city: 'Stockholm, Sweden',
    venue: 'Avicii Arena',
    date: 'Apr 20 2026',
  },
  {
    id: '31',
    city: 'Dublin, Ireland',
    venue: '3Arena',
    date: 'Apr 22 2026',
  },
  {
    id: '32',
    city: 'London, United Kingdom',
    venue: 'The O2',
    date: 'Apr 23 2026',
  },
  {
    id: '33',
    city: 'Manchester, United Kingdom',
    venue: 'AO Arena',
    date: 'Apr 24 2026',
  },
  {
    id: '34',
    city: 'Glasgow, United Kingdom',
    venue: 'OVO Hydro',
    date: 'Apr 25 2026',
  },
  {
    id: '35',
    city: 'Rome, Italy',
    venue: 'Sala Santa Cecilia : Auditorium Parco della Musica',
    time: '7:00pm',
    date: 'Apr 27 2026',
  },
  {
    id: '36',
    city: 'Rome, Italy',
    venue: 'Sala Santa Cecilia : Auditorium Parco della Musica',
    time: ' 10:30pm',
    date: 'Apr 27 2026',
  },
  {
    id: '37',
    city: 'Hollywood, Florida',
    venue: 'Hard Rock Live',
    date: 'Jun 26 2026',
  },
  {
    id: '38',
    city: 'Hollywood, Florida',
    venue: 'Hard Rock Live',
    date: 'Jun 27 2026',
  },
  {
    id: '39',
    city: 'Charlotte, North Carolina',
    venue: 'Spectrum Center',
    date: 'Jun 28 2026',
  },
  {
    id: '40',
    city: 'Los Angeles, California',
    venue: 'The Greek Theatre',
    date: 'Jul 11 2026',
  },
  {
    id: '41',
    city: 'Los Angeles, California',
    venue: 'The Greek Theatre',
    date: 'Jul 12 2026',
  },
  {
    id: '42',
    city: 'Edmonton, Canada',
    venue: 'Kinsmen Park',
    date: 'Jul 18 2026',
  },
  {
    id: '43',
    city: 'Winnipeg, Canada',
    venue: 'Assinboine Park',
    date: 'Jul 19 2026',
  },
  {
    id: '44',
    city: 'Atlantic City, New Jersey',
    venue: 'Ocean Casino Resort',
    time: '7:00pm',
    date: 'Jul 24 2026',
  },
  {
    id: '44',
    city: 'Atlantic City, New Jersey',
    venue: 'Ocean Casino Resort',
    time: '10:30pm',
    date: 'Jul 24 2026',
  },
  {
    id: '45',
    city: 'Halifax, Canada',
    venue: 'Garrison Grounds',
    date: 'Aug 6 2026',
  },
  {
    id: '46',
    city: 'Halifax, Canada',
    venue: 'Garrison Grounds',
    date: 'Aug 7 2026',
  },
  {
    id: '47',
    city: 'Bangor, Maine',
    venue: 'Maine Savings Amphitheater',
    date: 'Aug 8 2026',
  },
  {
    id: '48',
    city: 'Anchorage, Alaska',
    venue: 'Alaska Airlines Center',
    date: 'Aug 22 2026',
  },
  {
    id: '49',
    city: 'Fairbanks, Alaska',
    venue: 'Carlson Center',
    date: 'Aug 23 2026',
  },
  {
    id: '50',
    city: 'Bend, Oregon',
    venue: 'Hayden Homes Amphitheater',
    date: 'Aug 27 2026',
  },
  {
    id: '51',
    city: 'Calgary, Canada',
    venue: 'Prince Island Park',
    date: 'Aug 28 2026',
  },
  {
    id: '52',
    city: 'Spokane, Washington',
    venue: 'ONE Spokane Stadium',
    date: 'Aug 29 2026',
  },
  {
    id: '53',
    city: 'Vancouver, Canada',
    venue: 'Stanley Park',
    date: 'Aug 30 2026',
  },
  {
    id: '54',
    city: 'Uncasville, Connecticut',
    venue: 'Mohegan Sun Arena',
    date: 'Sep 4 2026',
  },
  {
    id: '55',
    city: 'Uncasville, Connecticut',
    venue: 'Mohegan Sun Arena',
    date: 'Sep 5 2026',
  },
  {
    id: '56',
    city: 'Durant, Oklahoma',
    venue: 'Choctaw Casino & Resort - Durant',
    date: 'Sep 25 2026',
  },
  {
    id: '57',
    city: 'Durant, Oklahoma',
    venue: 'Choctaw Casino & Resort - Durant',
    date: 'Sep 26 2026',
  },
  {
    id: '58',
    city: 'Rogers, Arkansas',
    venue: 'Walmart AMP',
    date: 'Sep 27 2026',
  },
  {
    id: '59',
    city: 'Nampa, Idaho',
    venue: 'Ford Idaho Center',
    date: 'Oct 9 2026',
  },
  {
    id: '60',
    city: 'Portland, Oregon',
    venue: 'Moda Center',
    date: 'Oct 10 2026',
  },
  {
    id: '61',
    city: 'Sacramento, California',
    venue: 'Golden 1 Center',
    date: 'Oct 11 2026',
  },
  {
    id: '62',
    city: 'Morrison, Colorado',
    venue: 'Red Rocks Amphitheatre',
    date: 'Oct 18 2026',
  },
  {
    id: '63',
    city: 'Nashville, Tennessee',
    venue: 'Bridgestone Arena',
    date: 'Oct 24 2026',
  },
  {
    id: '64',
    city: 'Chicago, Illinois',
    venue: 'United Center',
    date: 'Oct 25 2026',
  },
  {
    id: '65',
    city: 'Milwaukee, Wisconsin',
    venue: ' Fiserv Forum',
    date: 'Nov 7 2026',
  },
  {
    id: '66',
    city: 'Indianapolis, Indiana',
    venue: 'Gainbridge Fieldhouse',
    date: 'Nov 8 2026',
  },
  {
    id: '67',
    city: 'Elmont, New York',
    venue: 'UBS Arena',
    date: 'Nov 20 2026',
  },
  {
    id: '68',
    city: 'Buffalo, New York',
    venue: 'KeyBank Center',
    date: 'Nov 21 2026',
  },
  {
    id: '69',
    city: 'Toronto, Canada',
    venue: 'Scotiabank Arena',
    date: 'Nov 22 2026',
  },
  {
    id: '70',
    city: 'Fort Worth, Texas',
    venue: 'Dickies Arena',
    date: 'Dec 12 2026',
  },
  {
    id: '71',
    city: 'Wichita, Kansas',
    venue: 'INTRUST Bank Arena',
    date: 'Dec 13 2026',
  },
  {
    id: '72',
    city: 'Phoenix, Arizona',
    venue: 'Mortgage Matchup Center',
    date: 'Dec 26 2026',
  },
  {
    id: '73',
    city: 'Oklahoma City, Oklahoma',
    venue: 'Paycom Center',
    date: 'Dec 29 2026',
  },
]

function getExpiration(dateStr: string) {
  const d = new Date(dateStr)
  d.setHours(23, 59, 59, 999)
  return d
}

export function getTimeStatus(dateStr: string) {
  const now = new Date()
  const expiresAt = getExpiration(dateStr)

  const hoursLeft = (expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60)

  if (hoursLeft <= 0) return "expired"
  if (hoursLeft <= 24) return "ending"
  return "active"
}

export const activeTickets = tickets.filter(ticket => {
  return getTimeStatus(ticket.date) !== "expired"
})
