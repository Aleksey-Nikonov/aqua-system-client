import React from 'react'

// import './App.css';
import Main from './components/Main'
import usePolling from './hooks/usePolling'

function App() {
  let parameters = usePolling()
  
  return (
    <Main parameters={parameters} />
  );
}

export default App;
