import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0A1421;
    height: 5vh;
    width: 100vw;
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <h2>League Ops</h2>
    </StyledNavbar>
  )
}

export default Navbar
