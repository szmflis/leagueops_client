import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getChmpDataById } from '../../../utils/championsData'
import { getSummSpellById } from '../../../utils/summSpellData'
import { CHMP_IMG_SQUARE, SUMM_SPELL_URL } from '../../../utils/urls'
import { getMainPerkImg, getPerkImg } from '../../../utils/perkImgFinder'
import P from '../../P'
import StyledImg from './StyledImg'

const StyledMatchContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  background: ${({ win }) => win ? '#2C546D' : '#6F2323'};
`

const StyledTimeWinContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 130px;
  padding: 5px;
`

const StyledImgGridContainer = styled.div`
  display: grid;
  grid-template-rows: 40% 40% 20%;
  grid-template-columns: 50% 25% 25%;
  column-gap: 2px;
  row-gap 2px;
  padding: 10px 0px 10px 0px;
  text-align: center;
`

const StyledKdaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 0px 20px;
`

const StyledLvlCsCcContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 0px 20px;
`

const Match = ({ match }) => {
  const playerInfo = useSelector(state => state.player.playerInfo)

  const getTimeDiff = (a, b) => {
    const seconds = (b - a) / 1000

    let d = Math.floor(seconds / (3600 * 24))
    let h = Math.floor((seconds % (3600 * 24)) / 3600)
    if (h > 12) {
      d += 1
      h = 0
    }

    const dDisplay = d > 0 ? d + (d === 1 ? ' d ' : ' ds ') : ''
    const hDisplay = h > 0 ? h + (h === 1 ? ' h ' : ' hrs ') : ''
    return dDisplay + hDisplay;
  }

  const getGameDuration = (secs) => {
    const minutes = Math.floor(secs / 60)
    const seconds = secs - (minutes * 60)
    const mDisplay = minutes > 0 ? `${minutes}m ` : ''
    const sDisplay = seconds > 0 ? `${seconds}s` : ''
    return mDisplay + sDisplay
  }

  const renderCurrentPlayerData = () => {
    const currentPlayer = match.players.find(
      player => player.identity.player.summonerName === playerInfo.name
    )
    const champion = getChmpDataById(currentPlayer.championId)
    const summSpellf = getSummSpellById(currentPlayer.spellfId)
    const summSpelld = getSummSpellById(currentPlayer.spelldId)

    return (
      <>
        <StyledTimeWinContainer>
          <P size="0.875em" opacity="0.8">
            {`${getTimeDiff(match.creation, new Date().getTime())}`} ago
          </P>
          <hr></hr>
          <P color={currentPlayer.win ? 'blue' : 'red'} size="1em" weight="bold" marginBottom="3px">
            {currentPlayer.win ? 'Win' : 'Loss'}
          </P>
          <P size="0.875em" opacity="0.8">
            {getGameDuration(match.duration)}
          </P>
        </StyledTimeWinContainer>
        <StyledImgGridContainer>
          <StyledImg
            src={`${CHMP_IMG_SQUARE}/${champion.id}.png`}
            alt="champion square asset"
            row="1/3"
            column="1/2"
            width="75px"
            height="75px"
            radius="30px"
          />
          <StyledImg
            src={`${SUMM_SPELL_URL}/${summSpelld.id}.png`}
            alt="spell d asset"
            row="1/2"
            column="2/3"
            width="33px"
            height="33px"
            radius="2px"
          />
          <StyledImg
            src={`${SUMM_SPELL_URL}/${summSpellf.id}.png`}
            alt="spell f asset"
            row="2/3"
            column="2/3"
            width="33px"
            height="33px"
            radius="2px"
          />
          <StyledImg
            src={getPerkImg(currentPlayer.perk0)}
            alt="asset"
            row="1/2"
            column="3/4"
            width="33px"
            height="33px"
            radius="2px"
          />
          <StyledImg
            src={getMainPerkImg(currentPlayer.perkSubStyle)}
            alt="asset"
            row="2/3"
            column="3/4"
            width="33px"
            height="33px"
            radius="2px"
          />
          <P column="1/4" size="0.875" opacity="0.7">
            {champion.name}
          </P>
        </StyledImgGridContainer>
        <StyledKdaContainer>
          <P size="1.125em" weight="bold" marginBottom="5px">
            {`${currentPlayer.kills} / ${currentPlayer.deaths} / ${currentPlayer.assists}`}
          </P>
          <P size="1em" weight="bold" opacity="0.8">
            {`${((currentPlayer.kills + currentPlayer.assists) / (Math.max(1, currentPlayer.deaths))).toFixed(2)} :1 KDA`}
          </P>
        </StyledKdaContainer>
        <StyledLvlCsCcContainer>
          <P size="0.875em" marginBottom="3px">
            {`Level ${currentPlayer.chmpLvl}`}
          </P>
          <P size="0.875em" marginBottom="3px" opacity="0.7">
            {`${currentPlayer.cs} CS`}
          </P>
          <P size="0.875em" marginBottom="3px">
            {`${(currentPlayer.cs / Math.floor(match.duration / 60)).toFixed(1)} CS/Min`}
          </P>
          <P size="0.875em" marginBottom="3px" opacity="0.7">
            {`${currentPlayer.ccTime} seconds`}
          </P>
          <P size="0.875em" marginBottom="3px">
            {`${currentPlayer.damage_to_champions.total} champion dmg`}
          </P>
        </StyledLvlCsCcContainer>
      </>
    )
  }

  // const currentPlayer = match.players.find(
  //   player => player.identity.player.summonerName === playerInfo.name
  // )

  return (
    <StyledMatchContainer
      win={match.players.find(
        player => player.identity.player.summonerName === playerInfo.name
      ).win}
    >
      {renderCurrentPlayerData()}
    </StyledMatchContainer>
  )
}

export default Match
