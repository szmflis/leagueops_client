import styled from 'styled-components'

const H3 = styled.h3`
  text-decoration: none;
  padding: ${({ padding }) => padding || '0px'};
  color: ${({ color, theme }) => color || theme.colors.white};
  font-size: ${({ theme, size }) => size || theme.fontSize.huge};
  font-weight: ${({ theme, weight }) => weight || theme.fontWeight.bold};
  opacity: ${({ opacity }) => opacity || 1};
`

export default H3
