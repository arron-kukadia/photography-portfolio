'use client'

import { useQuery } from '@tanstack/react-query'
import { hygraphClient, GET_ABOUT_ME } from '@/lib/hygraph'
import { AboutMe } from '@/lib/types'
import { FIVE_MINUTES } from '@/lib/constants'

const fetchAboutMe = async (): Promise<AboutMe | null> => {
  const data = await hygraphClient.request<{ aboutMes: AboutMe[] }>(GET_ABOUT_ME)
  return data.aboutMes[0] || null
}

export const useAboutMe = () =>
  useQuery({
    queryKey: ['about-me'],
    queryFn: fetchAboutMe,
    staleTime: FIVE_MINUTES,
  })
