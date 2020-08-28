import styled from 'styled-components'

const H3 = styled.h3`
  text-decoration: none;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0px'};
  color: ${({ color, theme }) => color || theme.colors.white}
`

export default H3
