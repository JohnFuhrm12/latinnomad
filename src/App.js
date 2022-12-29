import './App.css';
import {useState} from 'react';

import HomeScreen from './HomeScreen';
import StartHere from './StartHere';

function App() {
  const [home, setHome] = useState(true);
  const [start, setStart] = useState(false);

  const props = { 
    home,
    setHome,
    start,
    setStart
  }

  return (
    <>
      {home ? <HomeScreen {...props}/> : <></>}
      {start ? <StartHere {...props}/> : <></>}
    </>
  );
}

export default App;
