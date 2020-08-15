import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import SearchAnimation from '../../SearchAnimation'
import Match from './Match'

const StyledMatchContainer = styled.div`
  background: #344164;
  margin: 5px;
  border-radius: 5px;
`

const MatchHistory = () => {
  const matchHistory = useSelector(state => state.player.history)
  const currentPlayer = useSelector(state => state.player)

  const renderMatches = () => {
    const mappedMatches = matchHistory.map(match => {
      return <Match data={match} />
    })
    return mappedMatches
  }

  return (
    <>
      <StyledMatchContainer>
        {
          matchHistory === undefined
            ? <SearchAnimation></SearchAnimation>
            : renderMatches()
        }
      </StyledMatchContainer>
    </>
  )
}

export default MatchHistory
