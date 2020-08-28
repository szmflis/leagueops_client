import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  CHMP_IMG_SQUARE,
  SUMM_SPELL_URL
} from '../../../../utils/urls'
import {
  getMainPerkImg,
  getPerkImg
} from '../../../../utils/dataExtractHelper'
import P from '../../../elements/P'
import StyledImg from './StyledImg'

const StyledImgGridContainer = styled.div`
  display: grid;
  grid-template-rows: 40% 40% 20%;
  grid-template-columns: 50% 25% 25%;
  column-gap: 2px;
  row-gap 2px;
  padding: 10px 0px 10px 0px;
  text-align: center;
`

const ChmpRunesGrid = ({
  championId, perk0, perkSubStyle, sumSpelldId, sumSpellfId, championName
}) => {
  return (
    <StyledImgGridContainer>
      <StyledImg
        src={`${CHMP_IMG_SQUARE}/${championId}.png`}
        alt="champion square asset"
        row="1/3"
        column="1/2"
        size="75px"
        radius="30px"
      />
      <StyledImg
        src={`${SUMM_SPELL_URL}/${sumSpelldId}.png`}
        alt="spell d asset"
        row="1/2"
        column="2/3"
        radius="2px"
      />
      <StyledImg
        src={`${SUMM_SPELL_URL}/${sumSpellfId}.png`}
        alt="spell f asset"
        row="2/3"
        column="2/3"
        radius="2px"
      />
      <StyledImg
        src={getPerkImg(perk0)}
        alt="main perk asset"
        row="1/2"
        column="3/4"
        radius="2px"
      />
      <StyledImg
        src={getMainPerkImg(perkSubStyle)}
        alt="support perk asset"
        row="2/3"
        column="3/4"
        radius="2px"
      />
      <P column="1/4" size="0.875" opacity="0.7">
        {championName}
      </P>
    </StyledImgGridContainer>
  )
}

ChmpRunesGrid.propTypes = {
  championId: PropTypes.string.isRequired,
  perk0: PropTypes.number.isRequired,
  perkSubStyle: PropTypes.number.isRequired,
  sumSpelldId: PropTypes.string.isRequired,
  sumSpellfId: PropTypes.string.isRequired,
  championName: PropTypes.string.isRequired,
}

export default ChmpRunesGrid
