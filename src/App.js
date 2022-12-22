import './App.css';
import HomeScreen from './HomeScreen';
import {useState} from 'react';

function App() {
  const [home, setHome] = useState(true);

  const props = { 
    home,
    setHome,
  }

  return (
    <>
      {home ? <HomeScreen {...props}/> : <></>}
    </>
  );
}

export default App;
