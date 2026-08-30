import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://reloopsciences.com/#organization",
    name: "Reloop Sciences",
    url: "https://reloopsciences.com",
    logo: {
      "@type": "ImageObject",
      url: "https://reloopsciences.com/logo.png",
      caption: "Reloop Sciences Logo",
    },
    description:
      "Reloop Sciences is developing a circular economy ecosystem focused on recovering and recycling non-hazardous laboratory plastics in India.",
    email: "hello@reloopsciences.com",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Laboratory Plastic Recycling",
      "Circular Economy for Life Sciences",
      "Sustainable Laboratory Waste Recovery",
      "Non-Hazardous Laboratory Plastics",
      "Material Traceability",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://reloopsciences.com/#website",
    name: "Reloop Sciences",
    url: "https://reloopsciences.com",
    description:
      "A traceable, closed-loop ecosystem transforming non-hazardous laboratory plastics into high-grade circular materials across India.",
    publisher: {
      "@id": "https://reloopsciences.com/#organization",
    },
    inLanguage: "en-US",
  };
}

export function getWebPageSchema({
  title,
  description,
  url,
  type = "WebPage",
}: {
  title: string;
  description: string;
  url: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "ItemPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": "https://reloopsciences.com/#website",
    },
    about: {
      "@id": "https://reloopsciences.com/#organization",
    },
    inLanguage: "en-US",
  };
}
