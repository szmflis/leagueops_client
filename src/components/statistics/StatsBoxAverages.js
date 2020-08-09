import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const BoxContainer = styled.div`
  width: 20vw;
  padding: 20px;
  border: 2px solid black;
`

const StatsBoxAverages = () => {
  const dataTest = useSelector(state => state.player)

  return (
    <BoxContainer>
      {dataTest === undefined || dataTest.length === 0 ? 'somethin' : dataTest[0].kills}
    </BoxContainer>
  )
}

export default StatsBoxAverages
