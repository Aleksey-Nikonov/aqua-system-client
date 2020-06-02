import React from 'react'

import Main from './components/Main'
import usePolling from './hooks/usePolling'

function App() {
  let parameters = usePolling()

  return (
    parameters && <Main parameters={parameters} />
  );
}

export default App;
