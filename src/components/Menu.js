import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  > ul {
    display: none;
    justify-content: space-between;
  }

  > a {
    display: inline-block;
    margin-left: 1em;
    min-width: max-content;
    position: relative;
    margin: 0;
    flex-basis: 100%;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    min-width: max-content;

    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  summary,
  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.text};
    &:hover {
      color: white;
    }
  }

  summary {
    display: inline-block;
    text-align: right;
    cursor: pointer;
  }

  details ul {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
    padding-top: 1em;
  }

  details li {
    margin-top: 1.5em;
  }

  @media (min-width: 768px) {
    > ul {
      display: flex;
    }

    details {
      display: none;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  const {
    menuLinks: [siteLink, ...menuLinks],
  } = useSiteMetadata()

  return (
    <Header>
      <Nav>
        <Link to={siteLink.slug} activeStyle={activeLinkStyle}>
          {siteLink.name}
        </Link>

        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <details>
          <summary>Menu</summary>

          <ul>
            {menuLinks.map(link => (
              <li key={link.name}>
                <Link to={link.slug} activeStyle={activeLinkStyle}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </Nav>
    </Header>
  )
}

export default Menu
