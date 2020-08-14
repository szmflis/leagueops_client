import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import PlayerSearchForm from './components/PlayerSearchForm'
import PlayerStatistics from './components/statistics/PlayerStatistics'
import Notification from './components/Notification'

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
  const notification = useSelector(state => state.notification)
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Navbar />
        <PlayerSearchForm />
        {notification === null
          ? <PlayerStatistics />
          : <Notification />}
      </StyledWrapper>
    </>
  )
}

export default App
