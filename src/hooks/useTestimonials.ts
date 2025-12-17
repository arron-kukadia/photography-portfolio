'use client'

import { useQuery } from '@tanstack/react-query'
import { hygraphClient, GET_TESTIMONIALS } from '@/lib/hygraph'
import { Testimonial } from '@/lib/types'
import { FIVE_MINUTES } from '@/lib/constants'

const fetchTestimonials = async (): Promise<Testimonial[]> => {
  const data = await hygraphClient.request<{ testimonials: Testimonial[] }>(GET_TESTIMONIALS)
  return data.testimonials
}

export const useTestimonials = () =>
  useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
    staleTime: FIVE_MINUTES,
  })
