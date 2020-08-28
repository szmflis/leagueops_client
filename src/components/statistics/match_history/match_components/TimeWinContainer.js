import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import P from '../../../elements/P'

const StyledTimeWinContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 100px;
  padding: 5px;
`

const TimeWinContainer = ({
  gameCreationTime, gameDurationTime, winCondition
}) => {
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

  return (
    <StyledTimeWinContainer>
      <P size="0.875em" opacity="0.8">
        {`${getTimeDiff(gameCreationTime, new Date().getTime())}`} ago
      </P>
      <hr></hr>
      <P color={winCondition ? '#696DFF' : 'red'} size="1em" weight="bold" marginBottom="3px">
        {winCondition ? 'Win' : 'Loss'}
      </P>
      <P size="0.875em" opacity="0.8">
        {getGameDuration(gameDurationTime)}
      </P>
    </StyledTimeWinContainer>
  )
}

TimeWinContainer.propTypes = {
  gameCreationTime: PropTypes.number.isRequired,
  gameDurationTime: PropTypes.number.isRequired,
  winCondition: PropTypes.bool.isRequired
}

export default TimeWinContainer
