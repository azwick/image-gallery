import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './styles/styles.scss';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
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
      <header className="">
        <nav>
          <button>Wishlist</button>
        </nav>
      </header>

      <section className="accordionList">

        <article className="accordionList-item">
          <button className="accordionList-item-title">
            Gallery Title
            <span className="accordionList-item-title-trigger open">→</span>
          </button>
          <div className="accordionList-item-content open">
            {/* Start Gallery */}
            <div className="galleryList">
              <div className="galleryList-item">
                TEst
              </div>
              <div className="galleryList-item">
                TEst
              </div>
              <div className="galleryList-item">
                TEst
              </div>
              <div className="galleryList-item">
                TEst
              </div>
            </div>
            {/* End Gallery */}
          </div>
        </article>
        


        <div className="accordionList-item">
          <button className="accordionList-item-title">
            Gallery Title
            <span className="accordionList-item-title-trigger open">→</span>
          </button>
          <div className="accordionList-item-content open">
            {/* Start Gallery */}
            <div className="galleryList">
              <div className="galleryList-item">
                TEst
              </div>
              <div className="galleryList-item">
                TEst
              </div>
              <div className="galleryList-item">
                TEst
              </div>
              <div className="galleryList-item">
                TEst
              </div>
            </div>
            {/* End Gallery */}
          </div>
        </div>


        <div className="accordionList-item">
          <button className="accordionList-item-title">
            Gallery Title
            <span className="accordionList-item-title-trigger open">→</span>
          </button>
          <div className="accordionList-item-content open">
            {/* Start Gallery */}
            <div className="galleryList">
              <div className="galleryList-item">
                TEst
              </div>
              <div className="galleryList-item">
                TEst
              </div>
              <div className="galleryList-item">
                TEst
              </div>
              <div className="galleryList-item">
                TEst
              </div>
            </div>
            {/* End Gallery */}
          </div>
        </div>

      </section>


      <section className="wishList">
        <div className="galleryList">
          <div className="galleryList-item">
            TEst
          </div>
          <div className="galleryList-item">
            TEst
          </div>
          <div className="galleryList-item">
            TEst
          </div>
          <div className="galleryList-item">
            TEst
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
