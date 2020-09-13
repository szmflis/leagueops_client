import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import H3 from '../elements/H3'
import { theme } from '../../utils/theme'

const StyledNavbar = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryDarkest};
  height: 3vh;
  min-height: 60px;
  width: 100vw;
  padding-bottom: 10px;
`

const StyledNavHeader = styled(H3)`
  padding-bottom: 5px;
  background: linear-gradient(0deg, red, red) bottom left no-repeat;
  background-size: 0px 3px;
  transition: 0.5s;

  margin: 0px 20px 0px 20px;

  &:hover {
    background-size: 100% 3px;
    opacity: 1;
  }

`

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavHeader as={Link} to="/about" size={theme.fontSize.bigger} opacity={0.7}>
        about
      </StyledNavHeader>
      <StyledNavHeader as={Link} to="/contact" size={theme.fontSize.bigger} opacity={0.8}>
        contact
      </StyledNavHeader>
      <StyledNavHeader as={Link} to="/">League Ops</StyledNavHeader>
      <StyledNavHeader as={Link} to="/champions" size={theme.fontSize.bigger} opacity={0.8}>
        champions
      </StyledNavHeader>
      <StyledNavHeader as={Link} to="/login" size={theme.fontSize.bigger} opacity={0.8}>
        login
      </StyledNavHeader>
    </StyledNavbar>
  )
}

export default Navbar
