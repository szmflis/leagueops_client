import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.darkest};
  height: 5vh;
  min-height: 50px;
  width: 100vw;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ color, theme }) => color || theme.colors.white};
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">League Ops</StyledLink>
    </StyledNavbar>
  )
}

export default Navbar
