import styled from 'styled-components'

const P = styled.p`
  font-size: ${({ size, theme }) => size || theme.fontSize.small};
  font-weight: ${({ weight, theme }) => weight || theme.fontWeight.regular};
  color: ${({ color, theme }) => color || theme.colors.white};
  margin: ${({ margin }) => margin || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  opacity: ${({ opacity }) => opacity || 1};
  grid-column: ${({ column }) => column || '1/2'}
`

export default P
