import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

function App() {
  const [active, setActive] = useState(0);
  function handleClick(e){
    console.log(e.target);
    const newActive = Number(e.target.getAttribute('data-index'));
    console.log(newActive);
    setActive(newActive);
  }

  return (
    <>
      <AppHeader/>
      <AppMain/>
      <AppFooter/>
    </>
  )
}

export default App
