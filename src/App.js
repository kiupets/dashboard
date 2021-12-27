import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { api } from './api/api';

function App() {
  const [state, setState] = useState('')
  useEffect(() => {
    (async () => {

      try {
        const response = await api.getSessionInfo()

        setState(response.data)
      } catch (error) {
        console.log(error)
      }
    })()
  })



  return (
    <div className="App">

      <Dashboard />
    </div>
  );
}

export default App;
