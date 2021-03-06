import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import SingleStat from './SingleStat'
import SearchAnimation from '../../elements/SearchAnimation'
import H3 from '../../elements/H3'

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primaryBright};
  margin: 5px;
  border-radius: 5px; 
`

const StyledAvgsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  animation: 1s ${({ theme }) => theme.animations.fadeIn}
`

const StatsBoxAverages = () => {
  const playerData = useSelector(state => state.player.combinedStats)

  const generateStatParagraphs = () => {
    if (playerData === undefined) {
      return (
        <SearchAnimation />
      )
    }

    const kills = (playerData.kills / playerData.games).toFixed(1)
    const assists = (playerData.assists / playerData.games).toFixed(1)
    const deaths = (playerData.deaths / playerData.games).toFixed(1)
    return (
      <StyledAvgsContainer>
        <H3 paddingBottom="5px">Averages per game</H3>
        <SingleStat
          info={`${kills} / ${deaths} / ${assists}`}
          statName="KDA "
        />
        <SingleStat
          info={`${(playerData.gold / playerData.games).toFixed(0)}`}
          statName="Gold "
        />
        <SingleStat
          info={`${((playerData.wins / playerData.games) * 100).toFixed(0)} %`}
          statName="Winrate "
        />
        <SingleStat
          info={`${(playerData.ccTime / playerData.games).toFixed(0)} seconds`}
          statName="CCtime "
        />
        <SingleStat
          info={`${(playerData.dmg / playerData.games).toFixed(0)}`}
          statName="DMG "
        />
        <SingleStat
          info={`${(playerData.objDmg / playerData.games).toFixed(0)}`}
          statName="Objective DMG  "
        />
        <SingleStat
          info={`${(playerData.cs / playerData.games).toFixed(0)}`}
          statName="CS  "
        />
        <SingleStat
          info={`${(playerData.towerKills / playerData.games).toFixed(0)}`}
          statName="Tower kills  "
        />
      </StyledAvgsContainer>
    )
  }

  return (
    <StyledWrapper>
      {generateStatParagraphs()}
    </StyledWrapper>
  )
}

export default StatsBoxAverages
