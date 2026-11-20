/**
 * White-label configuration. Update this file to rebrand the site without
 * changing component structure. Prices are demo amounts in USD.
 */
export const siteConfig = {
  company: {
    name: 'Summit Roofing Co.',
    shortName: 'Summit',
    initials: 'SR',
    tagline: 'Built to protect what matters.',
    phone: '(555) 014-ROOF',
    phoneHref: 'tel:+15550147663',
    email: 'hello@summitroofing.example',
    license: 'State License #ROOF-24819',
    emergency: '24/7 Emergency Roof Response',
    address: 'Austin, TX',
    hours: 'Mon–Sat, 7:00 AM–7:00 PM',
  },
  brand: { primary: '#10243a', accent: '#f28b32', accentDark: '#d96f17' },
  serviceAreas: ['Austin', 'Round Rock', 'Cedar Park', 'Pflugerville', 'Georgetown', 'Lakeway'],
  services: [
    { id: 'repair', name: 'Roof Repair', description: 'Fast, dependable repairs for leaks, storm damage, missing shingles and flashing.', price: 349, priceLabel: 'From $349', icon: 'repair', bullets: ['Leak diagnosis', 'Shingle & flashing repair', 'Photo-documented work'] },
    { id: 'replacement', name: 'Full Roof Replacement', description: 'A complete roofing system built around your home, budget and local conditions.', price: 500, priceLabel: 'Projects from $500 deposit', icon: 'roof', bullets: ['Material & color guidance', 'Tear-off and installation', 'Dedicated project manager'] },
    { id: 'inspection', name: 'Roof Inspection', description: 'A thorough roof health assessment with clear findings and next-step recommendations.', price: 149, priceLabel: '$149 flat fee', icon: 'inspection', bullets: ['Roof & attic review', 'Detailed photo report', 'Repair priority summary'] },
  ],
  checkout: { inspectionFee: 149, projectDeposit: 500, tuneUp: 349 },
  financing: { headline: 'A stronger roof. Payments that fit.', subhead: 'Explore flexible monthly payment options on qualifying projects.', providers: ['Klarna', 'Afterpay', 'Affirm'] },
}
export type Service = typeof siteConfig.services[number]
