import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import StatsBoxAverages from './StatsBoxAverages'

const StyledContainer = styled.div`
  height: ${({ isSearch }) => isSearch ? '80vh' : '0vh'};
  width: 100vw;
  background: #1F2833;
  padding-top: 100px;
  display: flex;
  justify-content: center;

  border: 1px solid green;
`

const StyledStatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 63vw;
  max-width: 1200px;
  height: 60vh;

  // border: 1px solid blue;
`

const StyledStatsWindow = styled.div`
  width: 20vw;
  padding: 20px;
  border: 2px solid black;
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
        <StyledStatsWindow>
          something2
        </StyledStatsWindow>
        <StyledStatsWindow>
          something3
        </StyledStatsWindow>
      </StyledStatsContainer>
    </StyledContainer>
  )
}

export default PlayerStatistics
