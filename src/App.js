import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Navbar from './components/Navbar'
import PlayerSearchForm from './components/PlayerSearchForm'
import PlayerStatistics from './components/PlayerStatistics'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    color: #ffffff;
  }

  *, *:: before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fafafa;
  height: 100vh;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Navbar />
        <PlayerSearchForm />
        <PlayerStatistics />
      </StyledWrapper>
    </>
  )
}

export default App
