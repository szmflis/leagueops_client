import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'
import emblemArray from '../../../utils/emblems'
import { CHMP_INFO_URL } from '../../../utils/urls'
import Mastery from './Mastery'

const StyledMasteriesContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 34% 33%;
  grid-template-rows: 100%;
  margin: 5px;
  background: #344164;
  border-radius: 5px;
`

const TopMasteries = () => {
  const [championData, setChampionData] = useState(null)
  const playerMasteries = useSelector(state => state.player.mastery)

  useEffect(() => {
    const fetchData = async () => {
      const champData = await axios.get(CHMP_INFO_URL)
      setChampionData(champData.data.data)
    }
    fetchData()
  }, [])

  const getChampionData = (championId) => {
    const championArr = Object.values(championData)
    const championObj = championArr.find(champion => Number(champion.key) === championId)
    return {
      name: championObj.name,
      title: championObj.title,
    }
  }

  const renderMasteries = () => {
    const mappedMasteries = playerMasteries.map(mastery => {
      return (
        <Mastery
          key={mastery.championId}
          name={getChampionData(mastery.championId).name}
          title={getChampionData(mastery.championId).title}
          emblem={emblemArray[mastery.championLevel - 1]}
          level={mastery.championLevel}
          mstrPoints={mastery.championPoints}
        />
      )
    })
    return mappedMasteries
  }

  return (
    <StyledMasteriesContainer>
      {playerMasteries === undefined ? <div></div> : renderMasteries()}
    </StyledMasteriesContainer>
  )
}

export default TopMasteries
