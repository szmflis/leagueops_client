import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  html, body{
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: 'Montserrat';
    color: #ffffff;
    background: ${({ theme }) => theme.colors.primaryBackground};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
