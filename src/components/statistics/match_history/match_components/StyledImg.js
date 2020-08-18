import styled from 'styled-components'

export const StyledOpaqueImgContainer = styled.div`
  background:rgba(0, 0, 0, 0.2);
`

const StyledImg = styled.img`
  width: ${({ size }) => size || '33px'};
  height: ${({ size }) => size || '33px'};
  border-radius: ${({ radius }) => radius};
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
`

export default StyledImg
