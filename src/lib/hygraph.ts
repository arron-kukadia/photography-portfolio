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
      landscapes {
        url
      }
      portraits {
        url
      }
      cityscapes {
        url
      }
      wildlife {
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
      content {
        html
        text
      }
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
        html
        text
      }
      image {
        url
      }
    }
  }
`
