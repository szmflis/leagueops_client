import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Layout from './layout/Layout'
import Home from './pages/Home'

const App = () => {
  return (
    <Layout>
      <Router>
        <Navbar />
        <Route exact path="/" render={() => <Home />} />
      </Router>
    </Layout>
  )
}

export default App
