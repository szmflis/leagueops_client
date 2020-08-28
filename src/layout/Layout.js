/* eslint-disable react/prop-types */
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  html, body{
    padding: 0;
    margin: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Montserrat';
    color: #ffffff;
    background: ${({ theme }) => theme.colors.background};
  }

  *, *:: before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  min-height: 100%;
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
