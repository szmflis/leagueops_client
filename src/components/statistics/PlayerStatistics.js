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
  background: ${({ theme }) => theme.colors.primaryBackground};
  height: auto;
  width: 100vw;
  justify-content: center;
`

const StyledStatsContainer = styled.div`
  display: flex;
  min-width: 60vw;
  max-width: 1200px;
  height: auto;

  padding: 8px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primaryBackgroundLight};
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
  width: 40vw;
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
