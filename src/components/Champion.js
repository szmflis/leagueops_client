import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import ChampionTooltip from './ChampionTooltip'
import { getChmpDataById } from '../utils/dataExtractHelper'
import StyledImg from './statistics/match_history/match_components/StyledImg'
import { CHMP_IMG_SQUARE } from '../utils/urls'

const Champion = ({ championId }) => {
  const renderChampion = () => {
    const championData = getChmpDataById(championId)
    // Add tooltip here
    return <div>
      <StyledImg
        src={`${CHMP_IMG_SQUARE}/${championData.id}.png`}
        size="80px"
        data-tip
        data-for={championData.id}
      />
      <ReactTooltip id={championData.id}>
        <ChampionTooltip
          name={championData.name}
          title={championData.title}
          attack={championData.info.attack}
          defense={championData.info.defense}
          magic={championData.info.magic}
          difficulty={championData.info.difficulty}
          tags={championData.tags}
          partype={championData.partype}
        />
      </ReactTooltip>
    </div>
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
