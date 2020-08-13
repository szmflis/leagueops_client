import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import StatsBoxAverages from './averages/StatsBoxAverages'
import TraitsBox from './player_traits/TraitsBox'
import PlayerInfo from './player_info/PlayerInfo'
import TopMasteries from './masteries/TopMasteries'

const StyledContainer = styled.div`
  display: ${({ isSearch }) => isSearch ? 'none' : 'flex'};
  visibility: ${({ isSearch }) => isSearch ? 'hidden' : 'visible'};
  height: 80vh;
  width: 100vw;
  background: #1F2833;
  justify-content: center;
`

const StyledStatsContainer = styled.div`
  display: flex;
  width: 63vw;
  max-width: 1200px;
  height: 60vh;
`

const StyledAvgPlrTraitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  min-width: 250px;
`

const StyledMasteriesHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  min-width: 500px;
`

const PlayerStatistics = () => {
  const search = useSelector(state => state.search)

  return (
    <StyledContainer isSearch={search === undefined || search.length === 0}>
      <StyledStatsContainer>
        <StyledAvgPlrTraitsContainer>
          <PlayerInfo />
          <StatsBoxAverages />
        </StyledAvgPlrTraitsContainer>
        <StyledMasteriesHistoryContainer>
          <TopMasteries />
        </StyledMasteriesHistoryContainer>
      </StyledStatsContainer>
    </StyledContainer>
  )
}

export default PlayerStatistics
