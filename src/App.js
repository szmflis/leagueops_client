import React from 'react';
import { useSelector } from 'react-redux'
import Navbar from './components/navbar/Navbar'
import PlayerSearchForm from './components/searchform/PlayerSearchForm'
import PlayerStatistics from './components/statistics/PlayerStatistics'
import Notification from './components/notification/Notification'
import Layout from './layout/Layout'
import FreeRotation from './components/rotation/FreeRotation'

const App = () => {
  const notification = useSelector(state => state.notification)

  return (
    <Layout>
      <Navbar />
      <PlayerSearchForm />
      {notification === null
        ? <PlayerStatistics />
        : <Notification />}
      <FreeRotation />
    </Layout>
  )
}

export default App
