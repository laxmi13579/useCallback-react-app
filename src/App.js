import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import List from './List';

function App() {
  const [number,setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const style = {
    background: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  }

  function themeHandler(){
    setDark(prevDark => !prevDark);
  }

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  },[number])

  return (
    <>
      <input value={number} type='number' onChange={(e)=>setNumber(parseInt(e.target.value))} />
      <button onClick={themeHandler} style={style}>change theme</button>
      <List getItems={getItems}/>
    </>
  );
}

export default App;
