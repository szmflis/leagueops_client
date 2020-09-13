import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayerStats, resetPlayerStats } from '../../reducers/playerReducer'
import { setSearchParams, resetSearchParams } from '../../reducers/searchReducer'
import { resetNotification } from '../../reducers/notificationReducer'
import Input from './Input'

const StyledWrapper = styled.div`
  height: ${({ isSearch }) => isSearch ? '80vh' : '10vh'};
  background: ${({ theme }) => theme.colors.primaryBackground};
  display: flex;
  align-items: center;
`

const StyledForm = styled.form`
  display:flex;
  justify-content: center;
  animation: 2s ${({ theme }) => theme.animations.fadeIn};
`

const PlayerSearchForm = () => {
  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  const searchHandler = async (event) => {
    event.preventDefault()

    const searchParam = event.target.search.value
    const regionParam = event.target.region.value

    dispatch(resetNotification())
    dispatch(resetSearchParams())
    dispatch(resetPlayerStats())

    dispatch(setSearchParams(searchParam, regionParam))
    dispatch(setPlayerStats(searchParam, regionParam))
  }

  return (
    <StyledWrapper isSearch={search === undefined || search.length === 0}>
      <StyledForm onSubmit={searchHandler}>
        <Input />
      </StyledForm>
    </StyledWrapper>
  )
}

export default PlayerSearchForm
