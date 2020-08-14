import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayerStats, resetPlayerStats } from '../reducers/playerReducer'
import { setSearchParams, resetSearchParams } from '../reducers/searchReducer'
import { resetNotification } from '../reducers/notificationReducer'

const StyledForm = styled.form`
  height: ${({ isSearch }) => isSearch ? '100vh' : '20vh'};
  width: 100vw;
  background: #1F2833;
  display:flex;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  width: 40vw;
  height: 6vh;
  border:none;
  background: #ffffff;

  font-size: 1.5em;
  padding: 5px;
  :focus{
    outline: none;
  }
`

const StyledButton = styled.button`
  border: none;
  background: #40507B;
  border-radius: 0px 10px 10px 0px;
  width: 12vw;
  max-width: 100px;
  height: 6vh;
  font-size: 1.2em;
  color: #ffffff;
  outline: none;

  :hover{
    transition: 0.2s;
    background: #CE0000;
  }

  :active{
    background: white;
  }
`

const StyledSelector = styled.select`
  width: 4vw;
  height: 6vh;
  background-color: white;
  outline: none;
  border: none;
  border-right: 1px solid #B5B5B5;
  appearance: none;
  padding: 5px;
  font-size: inherit;
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
    <StyledForm
      onSubmit={searchHandler}
      isSearch={search === undefined || search.length === 0}
    >
      <StyledSelector name="region">
        <option value="na1">NA</option>
        <option value="euw1">EUW</option>
        <option value="eun1">EUNE</option>
        <option value="ru">RU</option>
        <option value="br1">BR</option>
        <option value="jp1">JP</option>
        <option value="oc1">OC</option>
      </StyledSelector>
      <StyledInput
        name="search"
        placeholder="Search parameters are case sensitive"
        required="true"
      />
      <StyledButton>Search</StyledButton>
    </StyledForm>
  )
}

export default PlayerSearchForm
