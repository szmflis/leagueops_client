import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledStatsContainer = styled.div`
  height: ${({isSearch}) => isSearch ? '80vh' : '0vh'};
  width: 100vw;
  background: black;
`

const PlayerStatistics = () => {
  const search = useSelector(state => state.search)

  return(
    <StyledStatsContainer isSearch={search === undefined || search.length == 0 ? false : true}>
      
    </StyledStatsContainer> 
  )
}

export default PlayerStatistics