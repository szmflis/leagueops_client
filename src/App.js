import React from 'react';
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import PlayerSearchForm from './components/PlayerSearchForm'
import PlayerStatistics from './components/statistics/PlayerStatistics'
import Notification from './components/Notification'
import Layout from './layout/Layout'

const App = () => {
  const notification = useSelector(state => state.notification)

  return (
    <Layout>
      <Navbar />
      <PlayerSearchForm />
      {notification === null
        ? <PlayerStatistics />
        : <Notification />}
    </Layout>
  )
}

export default App
