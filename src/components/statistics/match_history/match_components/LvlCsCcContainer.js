import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import P from '../../../elements/P'

const StyledLvlCsCcContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 0px 20px;
`

const LvlCsCcContainer = ({
  chmpLvl, cs, ccTime, totalDmgToChmps, gameDuration
}) => {
  return (
    <StyledLvlCsCcContainer>
      <P size="0.875em" marginBottom="3px">
        {`Level ${chmpLvl}`}
      </P>
      <P size="0.875em" marginBottom="3px" opacity="0.7">
        {`${cs} CS`}
      </P>
      <P size="0.875em" marginBottom="3px">
        {`${(cs / Math.floor(gameDuration / 60)).toFixed(1)} CS/Min`}
      </P>
      <P size="0.875em" marginBottom="3px" opacity="0.7">
        {`${ccTime} s cc time`}
      </P>
      <P size="0.875em" marginBottom="3px">
        {`${totalDmgToChmps} dmg`}
      </P>
    </StyledLvlCsCcContainer>
  )
}

LvlCsCcContainer.propTypes = {
  chmpLvl: PropTypes.number.isRequired,
  cs: PropTypes.number.isRequired,
  ccTime: PropTypes.number.isRequired,
  totalDmgToChmps: PropTypes.number.isRequired,
  gameDuration: PropTypes.number.isRequired,
}

export default LvlCsCcContainer
