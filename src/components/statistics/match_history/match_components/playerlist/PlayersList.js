import React from 'react'
import styled from 'styled-components'
import { getChmpDataById } from '../../../../../utils/dataExtractHelper'
import Player from './Player'

const StyledPlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90px;
  padding: 10px;
`

const PlayersList = ({ players }) => {
  return (
    <StyledPlayersContainer>
      {
        players.map(player => <Player
          summonerName={player.identity.player.summonerName}
          championId={getChmpDataById(player.championId).id}
          key={player.identity.player.summonerName}
          playerData={player}
        />)
      }
    </StyledPlayersContainer>
  )
}

export default PlayersList
