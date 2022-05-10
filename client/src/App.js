import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeScreen from './Screens/HomeScreen'
import CreateScreen from './Screens/CreateScreen'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/create' element={<CreateScreen />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
