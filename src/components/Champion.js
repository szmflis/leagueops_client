import React from 'react'
import PropTypes from 'prop-types'
import { getChmpDataById } from '../utils/dataExtractHelper'
import StyledImg from './statistics/match_history/match_components/StyledImg'
import { CHMP_IMG_SQUARE } from '../utils/urls'

const Champion = ({ championId }) => {
  const renderChampion = () => {
    const championData = getChmpDataById(championId)
    // Add tooltip here
    return <StyledImg
      src={`${CHMP_IMG_SQUARE}/${championData.id}.png`}
      size="80px"
    />
  }

  return (
    <>
      {renderChampion()}
    </>
  )
}

Champion.propTypes = {
  championId: PropTypes.number.isRequired
}

export default Champion
