'use client'

import { useQuery } from '@tanstack/react-query'
import { hygraphClient, GET_PORTFOLIO_CARDS, GET_PORTFOLIO_IMAGES, GET_COVER_IMAGE } from '@/lib/hygraph'
import { PortfolioCard, PortfolioImages, GenreType, CoverImage } from '@/lib/types'
import { FIVE_MINUTES } from '@/lib/constants'

const fetchPortfolioCards = async (): Promise<PortfolioCard[]> => {
  const data = await hygraphClient.request<{ portfolioCards: PortfolioCard[] }>(GET_PORTFOLIO_CARDS)
  return data.portfolioCards
}

const fetchPortfolioImages = async (): Promise<PortfolioImages | null> => {
  const data = await hygraphClient.request<{ portfolioImages: PortfolioImages[] }>(GET_PORTFOLIO_IMAGES)
  return data.portfolioImages[0] || null
}

const fetchCoverImage = async (): Promise<CoverImage | null> => {
  const data = await hygraphClient.request<{ coverimages: CoverImage[] }>(GET_COVER_IMAGE)
  return data.coverimages[0] || null
}

export const usePortfolioCards = () =>
  useQuery({
    queryKey: ['portfolio-cards'],
    queryFn: fetchPortfolioCards,
    staleTime: FIVE_MINUTES,
  })

export const usePortfolioImages = () =>
  useQuery({
    queryKey: ['portfolio-images'],
    queryFn: fetchPortfolioImages,
    staleTime: FIVE_MINUTES,
  })

export const useGenreImages = (genre: GenreType) =>
  useQuery({
    queryKey: ['portfolio-images', genre],
    queryFn: async () => {
      const images = await fetchPortfolioImages()
      return images?.[genre] || []
    },
    staleTime: FIVE_MINUTES,
  })

export const useCoverImage = () =>
  useQuery({
    queryKey: ['cover-image'],
    queryFn: fetchCoverImage,
    staleTime: FIVE_MINUTES,
  })
