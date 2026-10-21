import type { Metadata } from 'next';
import { DM_Sans, Lora } from 'next/font/google';
import './globals.css';
import './sections.css';
import { branches, centre } from './content';
const sans = DM_Sans({ variable: '--font-dm-sans', subsets: ['latin'], display: 'swap' });
const serif = Lora({ variable: '--font-lora', subsets: ['latin'], style: ['normal', 'italic'], display: 'swap' });
export const metadata: Metadata = {
  title: 'Premdhara | Occupational Therapy & Child Development Centre in Moradabad',
  description: 'Child-centered occupational therapy, speech therapy, sensory integration and developmental support in Moradabad. Explore Premdhara and request a consultation at Buddhi Vihar or Gandhi Nagar.',
  icons: { icon: '/images/premdhara-logo.jpg' },
  keywords: ['Occupational Therapy Centre in Moradabad', 'Child Development Centre in Moradabad', 'Occupational Therapist in Moradabad', 'Pediatric Occupational Therapy Moradabad', 'Child Therapy Centre Moradabad', 'Autism Therapy Centre Moradabad', 'Speech Therapy Moradabad', 'Sensory Integration Therapy Moradabad', 'Child Development Therapy Moradabad'],
};
const clinicData = {
  '@context': 'https://schema.org',
  '@graph': branches.map((branch, index) => ({
    '@type': 'MedicalClinic',
    '@id': `#branch-${index+1}`,
    name: centre.fullName,
    description: 'Occupational therapy and child development support in Moradabad.',
    telephone: centre.phone,
    address: { '@type': 'PostalAddress', streetAddress: branch.address.replace(/\n/g, ' '), addressLocality: 'Moradabad', addressRegion: 'Uttar Pradesh', addressCountry: 'IN' },
  })),
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(clinicData).replace(/</g, '\\u003c')}}/>{children}</body></html>;
}
