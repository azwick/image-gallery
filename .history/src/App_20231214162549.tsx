import { useState } from 'react'
import WishListView from './FavoritesView';
import GalleryView from './GalleryView';
import { ImageListItemInterface } from './components/ImageListItem';
import './styles/styles.scss';

const App = () => {
  const [showGalleryView, setShowGalleryView] = useState(true);
  const [favoritesListData, setFavoritesListData] = useState<Array<ImageListItemInterface>>([]);

  const handleFavoritesList = (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => {
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
  };

  return (
    <main className="page">
      <header className="pageHead">
        <h1 className="pageHead-title">Gallery</h1>
        <nav className="pageHead-nav">
          <ul className="pageHead-nav-list">
            <li><button onClick={() => setShowGalleryView(true)} className={showGalleryView ? 'pageHead-nav-list-item active' : 'pageHead-nav-list-item'}>Photos</button></li>
            <li>
                <button onClick={() => setShowGalleryView(false)} className={!showGalleryView ? 'pageHead-nav-list-item active' : 'pageHead-nav-list-item'}>
                  Favorites List
                  <span className="counter">{favoritesListData.length}</span>
                </button>
            </li>
          </ul>
        </nav>
      </header>
      {
        showGalleryView ? 
          <GalleryView handleFavoritesList={handleFavoritesList} /> 
        : 
          <WishListView handleFavoritesList={handleFavoritesList} favoritesList={favoritesListData} />
      }
    </main>
  )
}

export default App
