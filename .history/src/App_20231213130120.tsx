import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './styles/styles.scss';
import Accordion from './components/Accordion';
import WishList from './WishList';
import Gallery from './Gallery';

const App = () => {
  const [showWishlist, setShowWishlist] = useState(false)
  
  const toggleView = () => {
    setShowWishlist(!open)
  }

  return (
    <main className="page">

      {
        showWishlist ? <Gallery /> : <WishList />
      }
      



    </main>
  )
}

export default App
