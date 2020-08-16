import styled from 'styled-components'

const P = styled.p`
  color: ${({ color }) => color || 'white'};
  margin: ${({ margin }) => margin || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  font-size: ${({ size }) => size || '0.75em'};
  font-weight: ${({ weight }) => weight || 'normal'};
  opacity: ${({ opacity }) => opacity || 1};
  grid-column: ${({ column }) => column || '1/2'}
`

export default P
