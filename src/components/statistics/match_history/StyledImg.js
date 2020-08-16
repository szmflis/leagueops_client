import styled from 'styled-components'

const StyledImg = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ radius }) => radius};
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
`

export default StyledImg
