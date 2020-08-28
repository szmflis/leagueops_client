import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`

const StyledSearch = styled.div`
  border: 16px solid #9e00c5;
  border-top: 16px solid #d500f9;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  animation: ${spin} 2s linear infinite;
  margin: 10px auto 10px auto;
  grid-column: 2/3;
`

const SearchAnimation = () => {
  return <StyledSearch></StyledSearch>
}

export default SearchAnimation
