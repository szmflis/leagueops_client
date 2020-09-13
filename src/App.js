import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Champions from './pages/Champions'
import Login from './pages/Login'

const App = () => {
  return (
    <Layout>
      <Router>
        <Navbar />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/champions" render={() => <Champions />} />
        <Route exact path="/login" render={() => <Login />} />
      </Router>
    </Layout>
  )
}

export default App
