import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledNotification = styled.div`
  display: ${({ isSearch }) => isSearch ? 'none' : 'flex'};
  visibility: ${({ isSearch }) => isSearch ? 'hidden' : 'visible'};
  background: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSize.huge};
  height: 80vh;
  width: 100vw;
  justify-content: center;
`

const Notification = () => {
  const notification = useSelector(state => state.notification)

  return (
    <StyledNotification>
      {notification}
    </StyledNotification>
  )
}

export default Notification
