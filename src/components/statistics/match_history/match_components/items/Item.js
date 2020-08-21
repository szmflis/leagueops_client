import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import StyledImg from '../StyledImg'
import { getItemData } from '../../../../../utils/dataExtractHelper'
import ItemTooltip from './ItemTooltip'

const StyledTooltip = styled(ReactTooltip)`
  max-width: 300px;
`

const Item = ({ url, id }) => {
  return (
    <>
      <StyledImg
        src={url}
        radius="6px"
        data-tip
        data-for={url}
      />
      <StyledTooltip id={url}>
        {
          id === undefined
            ? <span>Empty Item Slot</span>
            : <ItemTooltip data={getItemData(id)} />
        }
      </StyledTooltip>

    </>
  )
}

export default Item
