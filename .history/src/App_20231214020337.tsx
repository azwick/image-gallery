import { useState } from 'react'
import './styles/styles.scss';
import WishListView from './WishListView';
import GalleryView from './GalleryView';
import { ImageItemInterface } from './components/ImageListItem';

const App = () => {
  const [showHomeView, setShowHomeView] = useState(true)
  const [favoritesListData, setFavoritesListData] = useState([])


  const addToWishList = (photo:ImageItemInterface) => {
    favoritesListData.push({ albumId: photo.albumId, id: photo.id, title: photo.title, url: photo.url, thumbnailUrl: photo.thumbnailUrl });
    setFavoritesListData(favoritesListData)
    console.log(favoritesListData)
}

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
        showHomeView ? 
          <GalleryView createFavoritesList={setFavoritesListData} /> 
        : 
          <WishListView favoritesList={favoritesListData} />
      }
      {/* {console.log(favoritesListData)} */}
    </main>
  )
}

export default App
