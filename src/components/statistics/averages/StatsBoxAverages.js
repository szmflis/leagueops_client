import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import SingleStat from './SingleStat'

const StyledBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 20vw;
  background: #344164;

  border-radius: 14px; 
`

const StyledLabel = styled.h3`
  padding-bottom: 10px;
`

const StatsBoxAverages = () => {
  // All matches and stats are to be kept inside the store's state
  // for use in later stages of the application
  const playerData = useSelector(state => state.player[0])

  const kda = () => {
    const kills = (playerData.kills / playerData.games).toFixed(1)
    const assists = (playerData.assists / playerData.games).toFixed(1)
    const deaths = (playerData.deaths / playerData.games).toFixed(1)

    return (
      <SingleStat info={`${kills} / ${deaths} / ${assists}`} color="red"></SingleStat>
    )
  }

  const generateStatParagraphs = () => {
    if (playerData === undefined || playerData.length === 0) {
      return (
        // Change
        <p>awaiting results...</p>
      )
    }
    const kills = (playerData.kills / playerData.games).toFixed(1)
    const assists = (playerData.assists / playerData.games).toFixed(1)
    const deaths = (playerData.deaths / playerData.games).toFixed(1)
    return (
      // Change
      <>
        <SingleStat
          info={`${kills} / ${deaths} / ${assists}`}
          color="#FF0000"
          statName="KDA "
        />
        <SingleStat
          info={`${(playerData.gold / playerData.games).toFixed(0)}`}
          color="#42FF00"
          statName="Gold "
        />
        <SingleStat
          info={`${((playerData.wins / playerData.games) * 100).toFixed(0)} %`}
          color="#FFE600"
          statName="Winrate "
        />
        <SingleStat
          info={`${(playerData.ccTime / playerData.games).toFixed(0)} seconds`}
          color="#42FF00"
          statName="CCtime "
        />
        <SingleStat
          info={`${(playerData.dmg / playerData.games).toFixed(0)}`}
          color="#FF0000"
          statName="DMG "
        />
        <SingleStat
          info={`${(playerData.objDmg / playerData.games).toFixed(0)}`}
          color="#42FF00"
          statName="Objective DMG  "
        />
        <SingleStat
          info={`${(playerData.cs / playerData.games).toFixed(0)}`}
          color="#42FF00"
          statName="CS  "
        />
        <SingleStat
          info={`${(playerData.towerKills / playerData.games).toFixed(0)}`}
          color="#42FF00"
          statName="Tower kills  "
        />
      </>
    )
  }

  return (
    <StyledBoxContainer>
      <StyledLabel>Averages per game</StyledLabel>
      {generateStatParagraphs()}
    </StyledBoxContainer>
  )
}

export default StatsBoxAverages
