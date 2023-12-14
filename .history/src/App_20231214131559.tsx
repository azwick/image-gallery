import { useState } from 'react'
import WishListView from './WishListView';
import GalleryView from './GalleryView';
import { ImageListItemInterface } from './components/ImageListItem';
import './styles/styles.scss';

const App = () => {
  const [showHomeView, setShowHomeView] = useState(true);
  const [favoritesListData, setFavoritesListData] = useState<Array<ImageListItemInterface>>([]);

  const handleWishList = (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => {
    const exist = favoritesListData.some(item => item.id === id);
  
    if (!exist) {
      const newFavoritesListData: Array<ImageListItemInterface> = [
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
            <li onClick={() => setShowHomeView(true)} className={showHomeView ? 'header-nav-list-item active' : 'header-nav-list-item'}>Home</li>
            <li onClick={() => setShowHomeView(false)} className={!showHomeView ? 'header-nav-list-item active' : 'header-nav-list-item'}>WishList</li>
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
