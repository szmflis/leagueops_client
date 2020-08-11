import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import StatsBoxAverages from './averages/StatsBoxAverages'

const StyledContainer = styled.div`
  height: 80vh;
  width: 100vw;
  background: #1F2833;


  display: ${({ isSearch }) => isSearch ? 'flex' : 'none'};
  visibility: ${({ isSearch }) => isSearch ? 'visible' : 'hidden'};
  
  
  justify-content: center;
  border: 1px solid blue;
`

const StyledStatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 63vw;
  max-width: 1200px;
  height: 60vh;

  border: 1px solid red;
`

const PlayerStatistics = () => {
  const search = useSelector(state => state.search)

  return (
    <StyledContainer
      isSearch={search === undefined || search.length === 0
        ? false
        : true}
    >
      <StyledStatsContainer>
        <StatsBoxAverages />
      </StyledStatsContainer>
    </StyledContainer>
  )
}

export default PlayerStatistics
