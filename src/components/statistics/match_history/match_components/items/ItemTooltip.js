import React from 'react'
import PropTypes from 'prop-types'
import P from '../../../../elements/P'

const ItemTooltip = ({ data }) => {
  return (
    <>
      <P
        size={`${({ theme }) => theme.fontSize.big}`}
        weight={({ theme }) => theme.fontWeight.bold}
        color="orange"
      >
        {data.name}
      </P>
      <P
        size={`${({ theme }) => theme.fontSize.normal}`}
        weight={({ theme }) => theme.fontWeight.bold}
        color="chocolate"
      >
        {data.plaintext}
      </P>
      <P
        size={`${({ theme }) => theme.fontSize.big}`}
      >
        {data.description}
      </P>

    </>
  )
}

ItemTooltip.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    plaintext: PropTypes.string,
    description: PropTypes.string,
  }).isRequired
}

export default ItemTooltip
