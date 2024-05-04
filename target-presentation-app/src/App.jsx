import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Homepage } from './components/homepage';
import { Overview } from './components/overview';
import { EthicalConsiderations } from './components/ethicalConsiderations';
import { TargetResponse } from './components/targetResponse';
import { Conclusion } from './components/conclusion';
// import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/ethical-considerations" element={<EthicalConsiderations />} />
          <Route path="/target-response" element={<TargetResponse />} />
          <Route path="/conclusion" element={<Conclusion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
