import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Leads, Login, Profile, Registration } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  )
}

export default App
