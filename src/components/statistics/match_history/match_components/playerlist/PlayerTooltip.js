import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import P from '../../../../elements/P'

const StyledSpan = styled.span`
  color: ${({ color, theme }) => color || theme.colors.white};
`

const PlayerTooltip = ({ data }) => {
  return (
    <span>
      <P
        size={({ theme }) => theme.fontSize.big}
        weight={({ theme }) => theme.fontWeight.bold}
        color="orange"
      >
        {data.identity.player.summonerName}
      </P>
      <P size={({ theme }) => theme.fontSize.big}>
        Kills / Deaths / Assists :&emsp;
        <StyledSpan color="red">
          {data.kills} / {data.deaths} / {data.assists}
        </StyledSpan>
      </P>
      <P size={({ theme }) => theme.fontSize.big}>
        Damage done: {data.damage_to_champions.total} (to champions)
      </P>
      <P size={({ theme }) => theme.fontSize.big}>
        &emsp;Magic:&emsp;
        <StyledSpan color="blue">
          {data.damage_to_champions.magic}
        </StyledSpan>
      </P>
      <P size={({ theme }) => theme.fontSize.big}>
        &emsp;Physcial:&emsp;
        <StyledSpan color="orange">
          {data.damage_to_champions.physical}
        </StyledSpan>
      </P>
      <P size={({ theme }) => theme.fontSize.big}>
        &emsp;True:&emsp;
        <StyledSpan>
          {data.damage_to_champions.true}
        </StyledSpan>
      </P>
      <P size={({ theme }) => theme.fontSize.big}>
        &emsp;To Objectives:&emsp;
        <StyledSpan color="green">
          {data.damage_to_structures.objectives}
        </StyledSpan>
      </P>
      <P size={({ theme }) => theme.fontSize.big}>
        &emsp;To Towers:&emsp;
        <StyledSpan color="aqua">
          {data.damage_to_structures.turrets}
        </StyledSpan>
      </P>
      <P size={({ theme }) => theme.fontSize.big}>
        Cced enemies for:&emsp;
        <StyledSpan color="coral">
          {data.ccTime}s
        </StyledSpan>
      </P>
      <P size={({ theme }) => theme.fontSize.big}>
        Aquired&emsp;
        <StyledSpan color="gold">
          {data.gold} gold
        </StyledSpan>
      </P>
      <P size={({ theme }) => theme.fontSize.big}>
        Killed:&emsp;
        <StyledSpan color="DodgerBlue">
          {data.cs} minions
        </StyledSpan>
      </P>
    </span>
  )
}

PlayerTooltip.propTypes = {
  data: PropTypes.shape({
    championId: PropTypes.number,
    spellfId: PropTypes.number,
    spelldId: PropTypes.number,
    win: PropTypes.bool,
    perk0: PropTypes.number,
    perkSubStyle: PropTypes.number,
    kills: PropTypes.number,
    deaths: PropTypes.number,
    assists: PropTypes.number,
    chmpLvl: PropTypes.number,
    cs: PropTypes.number,
    ccTime: PropTypes.number,
    damage_to_champions: PropTypes.shape({
      total: PropTypes.number,
      magic: PropTypes.number,
      physical: PropTypes.number,
      true: PropTypes.number
    }),
    damage_to_structures: PropTypes.shape({
      objectives: PropTypes.number,
      turrets: PropTypes.number,
    }),
    gold: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.number),
    identity: PropTypes.shape({
      player: PropTypes.shape({
        summonerName: PropTypes.string
      })
    })
  }).isRequired
}

export default PlayerTooltip
