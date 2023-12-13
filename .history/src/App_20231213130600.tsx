import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './styles/styles.scss';
import WishList from './WishList';
import Gallery from './Gallery';

const App = () => {
  const [showWishlist, setShowWishlist] = useState(false)
  
  const toggleView = () => {
    setShowWishlist(!open);
    console.log("toggle View!")
  }

  return (
    <main className="page">
      <header className="header">
        <h1>Image Gallery</h1>
        <button onClick={toggleView}>Wishlist</button>
      </header>

      {
        showWishlist ? <Gallery /> : <WishList />
      }
      



    </main>
  )
}

export default App
