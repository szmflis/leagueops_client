import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import P from '../../../elements/P'

const StyledKdaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
`

const KdaContainer = ({ kills, deaths, assists }) => {
  return (
    <StyledKdaContainer>
      <P size="1.125em" weight="bold" marginBottom="5px">
        {`${kills} / ${deaths} / ${assists}`}
      </P>
      <P size="1em" weight="bold" opacity="0.8">
        {`${((kills + assists) / (Math.max(1, deaths))).toFixed(2)} :1 KDA`}
      </P>
    </StyledKdaContainer>
  )
}

KdaContainer.propTypes = {
  kills: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  assists: PropTypes.number.isRequired,
}

export default KdaContainer
