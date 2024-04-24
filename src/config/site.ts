import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "url extractor",
  author: "remco stoeten",
  description:
    'Extracts urls from text and some other magic.',
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    author: "https://remcostoeten.com",
  },
  links: {
    github: "https://github.com/remcostoeten/url-extracter",
  },
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}