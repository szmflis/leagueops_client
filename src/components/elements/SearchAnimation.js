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
  border: 10px solid FireBrick;
  border-top: 10px solid red;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 2s linear infinite;
  margin: 10px auto 10px auto;
  grid-column: 2/3;
`

const SearchAnimation = () => {
  return <StyledSearch></StyledSearch>
}

export default SearchAnimation
