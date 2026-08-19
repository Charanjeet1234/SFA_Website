export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SFA Globex DMCC",
  url: "https://sfaglobex.ae/",
  logo: "https://sfaglobex.ae/Sfa_Logo.png",
  description:
    "SFA Globex DMCC is a Dubai-based trading company specializing in the supply of ferro alloys including ferro manganese, silico manganese, ferro chrome, ferro silicon, manganese ore, and ferro molybdenum.",
  telephone: "+971-524426170",
  email: "sfa.globex@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2005, Dubai Star / Preatoni Tower, Cluster L, JLT",
    addressLocality: "Dubai",
    addressCountry: "AE",
    postalCode: "00000"
  },
  areaServed: [
    "UAE",
    "Middle East",
    "Europe",
    "Africa",
    "India",
    "Turkey"
  ],
  openingHours: ["Mo-Sa 10:00-18:00"],
  priceRange: "$$",
  sameAs: ["https://sfaglobex.ae/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-524426170",
    contactType: "sales",
    availableLanguage: ["English", "Arabic"]
  }
};
