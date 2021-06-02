import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StyledHeader = styled.section`
  padding: 4rem 0;
  margin-bottom: 2rem;

  & h1 {
    font-size: 3.2rem;
    margin-bottom: 2.4rem;
  }

  & > p {
    max-width: 75ch;
    line-height: normal;
    margin-bottom: 2rem;
  }
`

const TwoColumns = styled.div`
  margin-bottom: 4rem;

  & h1 {
    grid-area: heading;
  }

  & p {
    grid-area: subheading;
    font-size: 2rem;
    font-weight: regular;
    letter-spacing: 2px;
    line-height: 140%;
  }

  & .gatsby-image-wrapper {
    grid-area: image;
    width: 100%;
    margin-top: 3.2rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-template-areas:
      'heading image'
      'subheading image';
    grid-gap: 0 2.4rem;

    & .gatsby-image-wrapper {
      margin-top: 0;
    }
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "private_exam_candidates.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <TwoColumns>
        <h1>
          The Private <wbr />
          Candidates Site
        </h1>
        <p>
          Designed to support, campaign and give a voice for the private GCSE &
          A level candidates in the UK.
        </p>

        <Img
          fluid={data.image?.childImageSharp?.fluid}
          alt="Private exam candidates"
        />
      </TwoColumns>
    </StyledHeader>
  )
}

export default Header
