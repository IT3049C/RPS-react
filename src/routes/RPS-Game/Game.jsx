import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './Game.css'
import WelcomeScreen from './screens/WelcomeScreen'
import GameScreen from './screens/GameScreen'

function App() {
  const [name, setName] = useState(`player`)
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>Rock Paper Scissors</h1> 
      </div>
      {
        gameStarted
        ? <GameScreen name={name}/>
        : <WelcomeScreen name={name} onNameChange={setName} onGameStart={() => setGameStarted(true)}/>
      }
    </>
  )
}

export default App
