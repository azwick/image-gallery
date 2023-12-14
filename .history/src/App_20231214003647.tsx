import { useState } from 'react'
import './styles/styles.scss';
import WishListView from './WishListView';
import GalleryView from './GalleryView';

const App = () => {
  const [showHomeView, setShowHomeView] = useState(true)
  const [wishListData, setFavoritesList] = useState([])

  return (
    <main className="page">
      <header className="header">
        <h1 className="header-title">Gallery</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-list-item" onClick={() => setShowHomeView(true)}>Home</li>
            <li className="header-nav-list-item" onClick={() => setShowHomeView(false)}>WishList</li>
          </ul>
        </nav>
      </header>
      {
        showHomeView ? <GalleryView createFavoritesList={setFavoritesList} /> : <WishListView favoritesList={wishListData} />
      }
      {console.log(wishListData)}
    </main>
  )
}

export default App
