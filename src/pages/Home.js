import React from 'react'
import { useSelector } from 'react-redux'
import PlayerSearchForm from '../components/searchform/PlayerSearchForm'
import FreeRotation from '../components/rotation/FreeRotation'
import Notification from '../components/notification/Notification'
import PlayerStatistics from '../components/statistics/PlayerStatistics'

const Home = () => {
  const notification = useSelector(state => state.notification)

  return (
    <>
      <PlayerSearchForm />
      {
        notification === null
          ? <PlayerStatistics />
          : <Notification />
      }
      <FreeRotation />
    </>
  )
}

export default Home
