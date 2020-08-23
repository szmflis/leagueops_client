import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CHMP_SPLASH_URL } from '../../../utils/urls'
import P from '../../P'

const StyledMasteryContainer = styled.div`
  background-image: ${({ bckgroundName }) => `url(${CHMP_SPLASH_URL}/${bckgroundName}_0.jpg)`};
  background-position: 50% 25%;
`

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
`

const StyledEmblem = styled.img`
  width: 100px;
  height: 100px;
  opacity: 0.8;
`

const Mastery = ({
  name, title, emblem, level, mstrPoints, id
}) => {
  return (
    <StyledMasteryContainer bckgroundName={id}>
      <StyledContentWrapper>
        <P color="black" weight="800" size="1em" margin="1px">{name}</P>
        <P color="black" weight="600" margin="1px" opacity="0.8">{title}</P>
        <StyledEmblem src={emblem} alt="mastery emblem" />
        <P color="black" margin="1px" opacity="0.9" size="1em">Level {level}</P>
        <P color="black" margin="1px" weight="800" size="1em">{mstrPoints} PTS</P>
      </StyledContentWrapper>
    </StyledMasteryContainer>
  )
}

Mastery.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  emblem: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  mstrPoints: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}

export default Mastery
