import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import P from '../../../../P'
import StyledImg from '../StyledImg'
import { CHMP_IMG_SQUARE } from '../../../../../utils/urls'
import { setPlayerStats, resetPlayerStats } from '../../../../../reducers/playerReducer'
import { setSearchParams, resetSearchParams } from '../../../../../reducers/searchReducer'
import { resetNotification } from '../../../../../reducers/notificationReducer'
import PlayerTooltip from './PlayerTooltip'

const StyledPlayerContainer = styled.div`
  display: flex;
  align-items: center;
`

const Player = ({ summonerName, championId, playerData }) => {
  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  const handlePlayerSearch = (playerName) => {
    const { region } = search

    dispatch(resetNotification())
    dispatch(resetSearchParams())
    dispatch(resetPlayerStats())

    dispatch(setSearchParams(playerName, region))
    dispatch(setPlayerStats(playerName, region))
  }

  return (
    <StyledPlayerContainer
      onClick={() => handlePlayerSearch(summonerName)}
    >
      <StyledImg
        src={`${CHMP_IMG_SQUARE}/${championId}.png`}
        size="20px"
      />
      <P nowrap hover data-tip data-for={summonerName}>
        {summonerName}
      </P>
      <ReactTooltip id={summonerName}>
        <PlayerTooltip data={playerData} />
      </ReactTooltip>
    </StyledPlayerContainer>
  )
}

export default Player
