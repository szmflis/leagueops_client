import styled from 'styled-components'

const P = styled.p`
  font-size: ${({ size, theme }) => size || theme.fontSize.small};
  font-weight: ${({ weight, theme }) => weight || theme.fontWeight.regular};
  color: ${({ color, theme }) => color || theme.colors.white};
  margin: ${({ margin }) => margin || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  opacity: ${({ opacity }) => opacity || 1};
  grid-column: ${({ column }) => column || '1/2'};
  text-overflow: ${({ nowrap }) => nowrap ? 'ellipsis' : ''};
  white-space: ${({ nowrap }) => nowrap ? 'nowrap' : ''};
  overflow: ${({ nowrap }) => nowrap ? 'hidden' : ''};
  &:hover {
    overflow: ${({ hover }) => hover ? 'visible' : 'hidden'};
    z-index: ${({ hover }) => hover ? '1000' : ''};
    background-color: ${({ hover }) => hover ? 'rgba(0, 0, 0, 0.5)' : ''};
    font-weight: ${({ hover }) => hover ? '600' : ''}
  }
`

export default P
