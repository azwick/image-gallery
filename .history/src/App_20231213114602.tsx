import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './styles/styles.scss';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <nav className="navigation">
        <h1>Image Gallery</h1>
        <button>Wishlist</button>
      </nav>

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


      {/* <section className="wishList">
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
