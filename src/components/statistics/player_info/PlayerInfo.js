import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import SearchAnimation from '../../elements/SearchAnimation'
import { DD_PROFILE } from '../../../utils/urls'
import P from '../../elements/P'
import StyledImg from '../match_history/match_components/StyledImg'

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bright};
  margin: 5px;
  border-radius: 5px;
`

const StyledContenetContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: 1s ${({ theme }) => theme.animations.fadeIn};
`

const StyledNameLvlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`

const StyledImgNameContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.darkest};
  align-items: center;
`

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 0px 0px 6px;
`

const PlayerInfo = () => {
  const playerData = useSelector(state => state.player.playerInfo)
  const playerRankedData = useSelector(state => state.player.leagues)

  const singleLeagueInfoRender = (index) => {
    const league = playerRankedData[index]
    return (
      <>
        <P weight="600" opacity="0.9">
          {league.queueType.replace(/_/g, ' ')} {league.tier} {league.rank}
        </P>
        <P opacity="0.7">
          {league.wins} / {league.losses} {league.leaguePoints} LP
        </P>
        <P opacity="0.7" marginBottom="3px">
          {((league.wins / (league.wins + league.losses)) * 100).toFixed(1)} % Winrate
        </P>
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
      <StyledContenetContainer>
        <StyledImgNameContainer>
          <StyledImg
            src={`${DD_PROFILE}/${playerData.profileIconId}.png`}
            alt="Profile Icon"
            size="100px"
            fit="cover"
            radius="0px 0px 20px 0px"
          />
          <StyledNameLvlContainer>
            <P size="1.125em" marginBottom="2px" weight="600">
              {playerData.name}
            </P>
            <P size="1em">
              Level {playerData.summonerLevel}
            </P>
          </StyledNameLvlContainer>
        </StyledImgNameContainer>
        <StyledInfoContainer>
          {rankedInfoRender()}
        </StyledInfoContainer>
      </StyledContenetContainer>
    )
  }

  return (
    <StyledWrapper>
      {conditionalRender()}
    </StyledWrapper>
  )
}

export default PlayerInfo
