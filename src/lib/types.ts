export type Asset = {
  url: string
}

export type PortfolioCard = {
  id: string
  genre: string
  route: string
  image: Asset
}

export type PortfolioImages = {
  id: string
  landscapes: Asset[]
  portraits: Asset[]
  cityscapes: Asset[]
  wildlife: Asset[]
}

export type Testimonial = {
  id: string
  name: string
  content: string
  image: Asset
}

export type AboutMe = {
  id: string
  name: string
  content: {
    text: string
  }
  image: Asset
}

export type GenreType = 'landscapes' | 'portraits' | 'cityscapes' | 'wildlife'
