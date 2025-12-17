import { GraphQLClient, gql } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!
const token = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN!

export const hygraphClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export const GET_PORTFOLIO_CARDS = gql`
  query GetPortfolioCards {
    portfolioCards {
      id
      genre
      route
      image {
        url
      }
    }
  }
`

export const GET_PORTFOLIO_IMAGES = gql`
  query GetPortfolioImages {
    portfolioImages(first: 1) {
      id
      landscapes(first: 100) {
        url
      }
      portraits(first: 100) {
        url
      }
      cityscapes(first: 100) {
        url
      }
      wildlife(first: 100) {
        url
      }
    }
  }
`

export const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    testimonials {
      id
      name
      content
      image {
        url
      }
    }
  }
`

export const GET_COVER_IMAGE = gql`
  query GetCoverImage {
    coverimages(first: 1) {
      id
      image {
        url
      }
    }
  }
`

export const GET_ABOUT_ME = gql`
  query GetAboutMe {
    aboutMes(first: 1) {
      id
      name
      content {
        text
      }
      image {
        url
      }
    }
  }
`
