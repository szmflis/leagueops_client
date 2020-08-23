import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  ITEM_IMG_URL,
  EMPTY_IMG_URL
} from '../../../../../utils/urls'
import Item from './Item'

const StyledItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 33px 33px 33px 33px;
  grid-template-rows: 33px 33px; 
`

const ItemsGrid = ({ items }) => {
  return (
    <StyledItemsContainer>
      {items.map(item => item !== 0
        // Player can have multiple items of the same id, and item object doesnt have any other
        // Property to use as key - hence Math.random hack
        ? <Item
          url={`${ITEM_IMG_URL}/${item}.png`}
          key={`${item}-${Math.floor(Math.random() * 99)}`}
          id={item}
        />
        : <Item
          url={EMPTY_IMG_URL}
          key={`${item}-${Math.floor(Math.random() * 99)}`}
        />)}
    </StyledItemsContainer>
  )
}

ItemsGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default ItemsGrid
