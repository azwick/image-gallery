import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './styles/styles.scss';

const App = () => {
  const [open, setOpen] = useState(false)

  const toggleGallery = () => {
    
  }

  return (
    <main className="page">
      <header className="header">
        <h1>Image Gallery</h1>
        <button>Wishlist</button>
      </header>

      <section className="accordionList">

        <article className="accordionList-item">
          <button className="accordionList-item-title" onClick={toggleGallery}>
            <span className="accordionList-item-title-text">Gallery Title</span>
            <span className={open ? "accordionList-item-title-trigger open" : "accordionList-item-title-trigger"}>→</span>
          </button>
          <div className={open ? "accordionList-item-content open" : "accordionList-item-content"}>
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

      </section>
    </main>
  )
}

export default App
