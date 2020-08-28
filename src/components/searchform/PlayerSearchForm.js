import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { MdSearch } from 'react-icons/md'
import { setPlayerStats, resetPlayerStats } from '../../reducers/playerReducer'
import { setSearchParams, resetSearchParams } from '../../reducers/searchReducer'
import { resetNotification } from '../../reducers/notificationReducer'

const StyledWrapper = styled.div`
  height: ${({ isSearch }) => isSearch ? '100vh' : '20vh'};
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
`

const StyledForm = styled.form`
  display:flex;
  justify-content: center;
  animation: 2s ${({ theme }) => theme.animations.fadeIn}
`

const StyledInput = styled.input`
  width: 40vw;
  height: 5vh;
  min-height: ${({ theme }) => theme.spaces[2]}px;
  min-width: ${({ theme }) => theme.spaces[13]}px;
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.huge};
  padding: 5px;
  border:none;
  :focus{
    outline: none;
  }
`

const StyledButton = styled.button`
  width: 12vw;
  max-width: 100px;
  height: 5vh;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 0px 10px 10px 0px;
  background: ${({ theme }) => theme.colors.darkest};
  font-size: ${({ theme }) => theme.fontSize.bigger};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
`

const StyledSearchIcon = styled(MdSearch)`
  width: 9vw;
  min-width: 50px;
  height: 4vh;
  min-height: 40px;
`

const StyledSelector = styled.select`
  width: 4vw;
  min-width: 50px;
  height: 5vh;
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: none;
  border-radius: 5px 0px 0px 5px;
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
    <StyledWrapper isSearch={search === undefined || search.length === 0}>
      <StyledForm
        onSubmit={searchHandler}
      >
        <StyledSelector name="region">
          <option value="na1">NA</option>
          <option value="euw1">EUW</option>
          <option value="eun1">EUN</option>
          <option value="ru">RU</option>
          <option value="br1">BR</option>
          <option value="jp1">JP</option>
          <option value="oc1">OC</option>
        </StyledSelector>
        <StyledInput
          name="search"
          placeholder="Select player name and region (case sensitive)"
          required="true"
        />
        <StyledButton>
          <StyledSearchIcon />
        </StyledButton>
      </StyledForm>
    </StyledWrapper>
  )
}

export default PlayerSearchForm
