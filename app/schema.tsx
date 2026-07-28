export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KoreVity",
    url: "https://korevity.com",
    logo: "https://korevity.com/logo/logo-512.png",
    description:
      "Helping businesses work smarter with Business Intelligence and AI Automation.",
    email: "hello@korevity.com",
    sameAs: [
      "https://www.linkedin.com/company/korevity"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}