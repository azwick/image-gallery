import { useState } from 'react'
import './styles/styles.scss';
import WishListView from './WishListView';
import GalleryView from './GalleryView';
import { ImageItemInterface } from './components/ImageListItem';

const App = () => {
  const [showHomeView, setShowHomeView] = useState(true);
  const [favoritesListData, setFavoritesListData] = useState<Array<ImageItemInterface>>([]);

  const handleWishList = (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => {
    const exist = favoritesListData.some(item => item.id === id);
  
    if (!exist) {
      const newFavoritesListData: Array<ImageItemInterface> = [
        ...favoritesListData,
        { albumId, id, title, url, thumbnailUrl },
      ];
      setFavoritesListData(newFavoritesListData);
    } else {
      const updateList = favoritesListData.filter((item) => item.id !== id);
      setFavoritesListData(updateList);
    }
     console.log(favoritesListData) // ToDo
  };

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
          <GalleryView handleWishList={handleWishList} /> 
        : 
          <WishListView handleWishList={handleWishList} favoritesList={favoritesListData} />
      }
    </main>
  )
}

export default App
