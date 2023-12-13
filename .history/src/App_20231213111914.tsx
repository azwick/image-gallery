import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import '../styles/main.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Test edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="accordion-list">

        <div className="accordion-list-item">
          <button className="accordion-list-item-title">
            Gallery Title
            <span className="accordion-list-item-title-trigger open">→</span>
          </button>
          <div className="accordion-list-item-content open">

            <div className="gallery">
              <div className="gallery-list">
                TEst
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
