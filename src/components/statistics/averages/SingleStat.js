import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledStatistic = styled.p`
  color:${({ parColor }) => parColor || 'white'};
`
// Add PropTypes
const SingleStat = ({ info, color, statName }) => {
  return (
    <StyledStatistic parColor={color}>
      {statName} {info}
    </StyledStatistic>
  )
}

SingleStat.propTypes = {
  info: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  statName: PropTypes.string.isRequired,
}

export default SingleStat
