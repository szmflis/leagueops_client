import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  html, body{
    padding: 0;
    margin: 0;
  }

  html{
    height: 100%;
  }

  body {
    font-family: 'Montserrat';
    color: #ffffff;
    background: ${({ theme }) => theme.colors.background};
    min-height: 100%;
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
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
)

export default Layout
