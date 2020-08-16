import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import SearchAnimation from '../../SearchAnimation'
import { DD_PROFILE } from '../../../utils/urls'
import P from '../../P'

const StyledBoxContainer = styled.div`
  display: flex;
  background: #38424E;
  margin: 5px;
  border-radius: 5px;
`

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 0px 0px 6px;
`

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`

const PlayerInfo = () => {
  const playerData = useSelector(state => state.player.playerInfo)
  const playerRankedData = useSelector(state => state.player.leagues)

  const singleLeagueInfoRender = (index) => {
    const league = playerRankedData[index]
    return (
      <>
        <P>{league.queueType.replace(/_/g, ' ')} {league.tier} {league.rank}</P>
        <P opacity="0.5">{league.wins} / {league.losses} {league.leaguePoints} LP</P>
        <P opacity="0.5" marginBottom="3px">{((league.wins / (league.wins + league.losses)) * 100).toFixed(1)} % Winrate</P>
      </>
    )
  }

  const rankedInfoRender = () => {
    if (playerRankedData.length === 0) {
      return (<P>No ranked games played</P>)
    }
    if (playerRankedData.length === 1) {
      return (<>{singleLeagueInfoRender(0)}</>)
    }
    return (
      <>
        {singleLeagueInfoRender(0)}
        {singleLeagueInfoRender(1)}
      </>
    )
  }

  const conditionalRender = () => {
    if (playerData === undefined) {
      return <SearchAnimation />
    }

    return (
      <>
        <StyledImg
          src={`${DD_PROFILE}/${playerData.profileIconId}.png`}
          alt="Profile Icon"
        />
        <StyledInfoContainer>
          <P size="1.125em" marginBottom="2px">{playerData.name} {playerData.summonerLevel}</P>
          {rankedInfoRender()}
        </StyledInfoContainer>
      </>
    )
  }

  return (
    <StyledBoxContainer>
      {conditionalRender()}
    </StyledBoxContainer>
  )
}

export default PlayerInfo
