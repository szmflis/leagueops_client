import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  getChmpDataById,
  getSummSpellById
} from '../../../utils/dataExtractHelper'

import ChmpRunesGrid from './match_components/ChmpRunesGrid'
import ItemsGrid from './match_components/items/ItemsGrid'
import LvlCsCcContainer from './match_components/LvlCsCcContainer'
import TimeWinContainer from './match_components/TimeWinContainer'
import KdaContainer from './match_components/KdaContainer'
import PlayersList from './match_components/playerlist/PlayersList'

const StyledMatchContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  background: ${({ win }) => win ? '#2C546D' : '#6F2323'};
`

const Match = ({ match }) => {
  const playerInfo = useSelector(state => state.player.playerInfo)

  const renderCurrentPlayerData = () => {
    const currentPlayer = match.players.find(
      player => player.identity.player.summonerName === playerInfo.name
    )
    const champion = getChmpDataById(currentPlayer.championId)
    const summSpellf = getSummSpellById(currentPlayer.spellfId)
    const summSpelld = getSummSpellById(currentPlayer.spelldId)

    return (
      <>
        <TimeWinContainer
          gameCreationTime={match.creation}
          gameDurationTime={match.duration}
          winCondition={currentPlayer.win}
        />
        <ChmpRunesGrid
          championId={champion.id}
          perk0={currentPlayer.perk0}
          perkSubStyle={currentPlayer.perkSubStyle}
          sumSpelldId={summSpelld.id}
          sumSpellfId={summSpellf.id}
          championName={champion.name}
        />
        <KdaContainer
          kills={currentPlayer.kills}
          deaths={currentPlayer.deaths}
          assists={currentPlayer.assists}
        />
        <LvlCsCcContainer
          chmpLvl={currentPlayer.chmpLvl}
          cs={currentPlayer.cs}
          ccTime={currentPlayer.ccTime}
          totalDmgToChmps={currentPlayer.damage_to_champions.total}
          gameDuration={match.duration}
        />
        <ItemsGrid items={currentPlayer.items} />
        <PlayersList players={match.players.slice(0, 5)} />
        <PlayersList players={match.players.slice(5, 10)} />
      </>
    )
  }

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
