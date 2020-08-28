import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import emblemArray from '../../../utils/emblems'
import Mastery from './Mastery'
import SearchAnimation from '../../elements/SearchAnimation'
import { getChmpDataById } from '../../../utils/dataExtractHelper'

const StyledMasteriesContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 34% 33%;
  grid-template-rows: 100%;
  margin: 5px;
  background: ${({ theme }) => theme.colors.bright};
  border-radius: 5px;
`

const TopMasteries = () => {
  const playerMasteries = useSelector(state => state.player.mastery)

  const renderMasteries = () => {
    const mappedMasteries = playerMasteries.map(mastery => {
      return (
        <Mastery
          key={mastery.championId}
          name={getChmpDataById(mastery.championId).name}
          title={getChmpDataById(mastery.championId).title}
          emblem={emblemArray[mastery.championLevel - 1]}
          level={mastery.championLevel}
          mstrPoints={mastery.championPoints}
          id={getChmpDataById(mastery.championId).id}
        />
      )
    })
    return mappedMasteries
  }

  return (
    <StyledMasteriesContainer>
      {playerMasteries === undefined
        ? <SearchAnimation></SearchAnimation>
        : renderMasteries()}
    </StyledMasteriesContainer>
  )
}

export default TopMasteries
