import React from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

const StyledInput = styled.input`
  width: ${({ theme }) => theme.sizes[14]}px;
  height: ${({ theme }) => theme.sizes[3]}px;;

  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.huge};
  padding: 5px;
  border:none;
  :focus{
    outline: none;
  }
`

const StyledButton = styled.button`
  width: ${({ theme }) => theme.sizes[4]}px;  
  height: ${({ theme }) => theme.sizes[3]}px;

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
  width: ${({ theme }) => theme.sizes[2]}px;  
  height: ${({ theme }) => theme.sizes[2]}px;
`

const StyledSelector = styled.select`
  width: ${({ theme }) => theme.sizes[3]}px;  
  height: ${({ theme }) => theme.sizes[3]}px;

  outline: none;
  border: none;
  appearance: none;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px 0px 0px 5px;
  border-right: 1px solid #B5B5B5;
  padding: 5px;
  font-size: inherit;
`

const Input = () => {
  return (
    <>
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
    </>
  )
}

export default Input
