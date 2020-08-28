import React from 'react'
import PropTypes from 'prop-types'
import P from '../../elements/P'

const SingleStat = ({ info, statName }) => {
  return (
    <P weigh="bold" size="1em" marginBottom="2px">
      {statName} {info}
    </P>
  )
}

SingleStat.propTypes = {
  info: PropTypes.string.isRequired,
  statName: PropTypes.string.isRequired,
}

export default SingleStat
