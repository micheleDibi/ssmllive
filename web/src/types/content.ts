export interface Program {
  id: string
  name: string
  shortName: string
  icon: string
  description: string
  careers: string[]
}

export interface Partner {
  name: string
  description: string
}

export interface SocialLink {
  platform: string
  url: string
  handle: string
}

export interface NewsItem {
  title: string
  date: string
  excerpt: string
}

export interface SlideConfig {
  id: string
  duration: number
}
