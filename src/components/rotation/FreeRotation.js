import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { getCurrentRotation } from '../../services/championService'
import Champion from './Champion'
import P from '../elements/P'

const StyledRotationContainer = styled.div`
  display: ${({ isSearch }) => isSearch ? 'flex' : 'none'};
  visibility: ${({ isSearch }) => isSearch ? 'visible' : 'hidden'};
  background: ${({ theme }) => theme.colors.dark};
  height: 200px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: 1s ${({ theme }) => theme.animations.fadeIn};
`

const StyledChampionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const FreeRotation = () => {
  const [rotation, setRotation] = useState()
  const [error, setError] = useState()
  const search = useSelector(state => state.search)

  useEffect(() => {
    async function fetchRotationData() {
      const rotationData = await getCurrentRotation()
      if (rotationData.error) {
        setError(rotationData.error)
      }
      setRotation(rotationData.freeChampionIds)
    }
    fetchRotationData()
  }, [])

  return (
    <StyledRotationContainer
      isSearch={search === undefined || search.length === 0}
    >
      { rotation && error === undefined ? (
        <StyledWrapper>
          <P
            size="1.250em"
            weight="600"
            opacity="0.9"
            marginBottom="15px"
          > Current Rotation </P>
          <StyledChampionContainer>
            {rotation.map(id => <Champion championId={id} key={id} />)}
          </StyledChampionContainer>
        </StyledWrapper>
      ) : (
        <P
          size="1.250em"
        >
          {error}
        </P>
      )}
    </StyledRotationContainer>
  )
}

export default FreeRotation
