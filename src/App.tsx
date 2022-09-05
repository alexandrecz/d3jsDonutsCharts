import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://d3js.org/" target="_blank">
          <img src="https://d3js.org/logo.svg" className="logo d3" alt="D3 logo" />
        </a>
      </div>
      <h1>Vite + React + D3</h1>
      <div className="card">
        {`Donut`}
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </div>
  )
}

export default App
