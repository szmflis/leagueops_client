import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

PlayersList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    championId: PropTypes.number,
    spellfId: PropTypes.number,
    spelldId: PropTypes.number,
    win: PropTypes.bool,
    perk0: PropTypes.number,
    perkSubStyle: PropTypes.number,
    kills: PropTypes.number,
    deaths: PropTypes.number,
    assists: PropTypes.number,
    chmpLvl: PropTypes.number,
    cs: PropTypes.number,
    ccTime: PropTypes.number,
    damage_to_champions: PropTypes.shape({
      total: PropTypes.number,
      magic: PropTypes.number,
      physical: PropTypes.number,
      true: PropTypes.number
    }),
    damage_to_structures: PropTypes.shape({
      objectives: PropTypes.number,
      turrets: PropTypes.number,
    }),
    gold: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.number),
    identity: PropTypes.shape({
      player: PropTypes.shape({
        summonerName: PropTypes.string
      })
    })
  })).isRequired
}

export default PlayersList
