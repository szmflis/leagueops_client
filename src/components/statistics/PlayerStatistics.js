import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import StatsBoxAverages from './averages/StatsBoxAverages'
import PlayerInfo from './player_info/PlayerInfo'
import TopMasteries from './masteries/TopMasteries'
import MatchHistory from './match_history/MatchHistory'

const StyledContainer = styled.div`
  display: ${({ isSearch }) => isSearch ? 'none' : 'flex'};
  visibility: ${({ isSearch }) => isSearch ? 'hidden' : 'visible'};
  height: 80vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.background};
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
  min-width: 800px;
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
          <MatchHistory />
        </StyledMasteriesHistoryContainer>
      </StyledStatsContainer>
    </StyledContainer>
  )
}

export default PlayerStatistics
