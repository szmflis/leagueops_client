import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayerStats } from '../reducers/playerReducer'
import { setSearchParams } from '../reducers/searchReducer'


const StyledForm = styled.form`
  height: ${({isSearch}) => isSearch ? '20vh' : '100vh'};
  width: 100vw;
  background: #f05545;
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
  background: #b71c1c;
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
  outline: none;
  border: none;
  appearance: none;
  padding: 5px;
  font-size: inherit;
`

const PlayerSearchForm = () => {

  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  const searchHandler = async (event) => {
    event.preventDefault()

    console.log(search)

    const searchParam = event.target.search.value
    const regionParam = event.target.region.value

    dispatch(setSearchParams(searchParam, regionParam))
    dispatch(setPlayerStats(searchParam, regionParam))
  }

  return (
    <StyledForm onSubmit={searchHandler} isSearch={search === undefined || search.length == 0 ? false : true}>
      <StyledSelector name="region">
        <option value="na1">NA</option>
        <option value="euw1">EUW</option>
        <option value="eun1">EUNE</option>
      </StyledSelector>
      <StyledInput name="search" />
      <StyledButton>Search</StyledButton>
    </StyledForm>
  )
}

export default PlayerSearchForm
