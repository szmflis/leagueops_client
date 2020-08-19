import React from 'react'
import styled from 'styled-components'
import P from '../../../P'
import { CHMP_IMG_SQUARE } from '../../../../utils/urls'
import StyledImg from './StyledImg'
import { getChmpDataById } from '../../../../utils/dataExtractHelper'

const StyledPlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90px;
  padding: 10px;
`

const StyledPlayerContainer = styled.div`
  display: flex;
`

const PlayersList = ({ players }) => {
  const renderPlayers = () => {
    const mappedPlayers = players.map(player => {
      const championId = getChmpDataById(player.championId).id
      return (
        <StyledPlayerContainer>
          <StyledImg
            src={`${CHMP_IMG_SQUARE}/${championId}.png`}
            size="20px"
          />
          <P nowrap>
            {player.identity.player.summonerName}
          </P>
        </StyledPlayerContainer>
      )
    })

    return mappedPlayers
  }

  return (
    <StyledPlayersContainer>
      {renderPlayers()}
    </StyledPlayersContainer>
  )
}

export default PlayersList
