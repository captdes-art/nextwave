import { Metadata } from "next"

export const siteConfig = {
  name: "Next Wave Wellness",
  description: "Discover the latest biohacking technologies and wellness products. Expert reviews of Oura Ring, WHOOP, Eight Sleep, Muse, and more to optimize your health and performance.",
  url: "https://nextwavewellness.com",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/nextwavewellness",
  },
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title: string
  description?: string
  image?: string
  noIndex?: boolean
}): Metadata {
  return {
    title: `${title} | ${siteConfig.name}`,
    description: description || siteConfig.description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.description,
      type: "website",
      url: siteConfig.url,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  }
}
