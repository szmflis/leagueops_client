import React from 'react'
import PropTypes from 'prop-types'
import P from '../elements/P'

const ChampionTooltip = ({
  name, title, attack, defense, magic, difficulty, tags, partype
}) => {
  return (
    <>
      <P color="coral" size="1em" weight="600">
        {name}
      </P>
      <P color="coral" size="1em">
        {title}
      </P>
      <br></br>
      <P color="crimson" size="1em">
        Attack:&emsp;{attack}
      </P>
      <P color="chartreuse" size="1em">
        Defense:&emsp;{defense}
      </P>
      <P color="aqua" size="1em">
        Magic:&emsp;{magic}
      </P>
      <P color="darkorchid" size="1em">
        Difficulty:&emsp;{difficulty}
      </P>
      <br></br>
      <P color="aqua" size="1em">
        Partype:&emsp;{partype}
      </P>
      {tags.map(tag => <P color="white" size="1em" key={tag}>{tag}</P>)}
    </>
  )
}

ChampionTooltip.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  magic: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  partype: PropTypes.string.isRequired
}

export default ChampionTooltip
