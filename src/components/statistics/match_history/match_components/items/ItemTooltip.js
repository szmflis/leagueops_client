import React from 'react'
import P from '../../../../P'

const ItemTooltip = ({ data }) => {
  return (
    <>
      <P
        size={({ theme }) => theme.fontSize.big}
        weight={({ theme }) => theme.fontWeight.bold}
        color="orange"
      >
        {data.name}
      </P>
      <P
        size={({ theme }) => theme.fontSize.normal}
        weight={({ theme }) => theme.fontWeight.bold}
        color="chocolate"
      >
        {data.plaintext}
      </P>
      <P
        size={({ theme }) => theme.fontSize.normal}
      >
        {data.description}
      </P>

    </>
  )
}

export default ItemTooltip
