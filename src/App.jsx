import './App.css'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/room/:id' element={<VideoPage />} />
      </Routes>
    </Router>
  )
}

export default App
