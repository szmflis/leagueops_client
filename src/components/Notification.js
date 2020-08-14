import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledNotification = styled.div`
  display: ${({ isSearch }) => isSearch ? 'none' : 'flex'};
  visibility: ${({ isSearch }) => isSearch ? 'hidden' : 'visible'};
  height: 80vh;
  width: 100vw;
  background: #1F2833;
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
