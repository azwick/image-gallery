import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './styles/styles.scss';
import Accordion from './components/Accordion';

const App = () => {
  
  return (
    <main className="page">
      <header className="header">
        <h1>Image Gallery</h1>
        <button>Wishlist</button>
      </header>

      <Accordion />


      {/* <section className="wishList">
        Wishlist
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
      </section> */}

    </main>
  )
}

export default App
