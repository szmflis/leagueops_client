import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'
import P from '../../../../elements/P'
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
        <PlayerTooltip
          data={playerData}
        />
      </ReactTooltip>
    </StyledPlayerContainer>
  )
}

Player.propTypes = {
  summonerName: PropTypes.string.isRequired,
  championId: PropTypes.string.isRequired,
  playerData: PropTypes.shape({
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
  }).isRequired
}

export default Player
