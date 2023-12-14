import { useState } from 'react'
import WishListView from './FavoritesView';
import GalleryView from './GalleryView';
import { ImageListItemInterface } from './components/ImageListItem';
import './styles/styles.scss';

const App = () => {
  const [showHomeView, setShowHomeView] = useState(true);
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
     console.log(favoritesListData) // ToDo
  };

  return (
    <main className="page">
      <header className="pageHead">
        <h1 className="pageHead-title">Gallery</h1>
        <nav className="pageHead-nav">
          <ul className="pageHead-nav-list">
            <li><button onClick={() => setShowHomeView(true)} className={showHomeView ? 'pageHead-nav-list-item active' : 'pageHead-nav-list-item'}>Home</button></li>
            <li><button onClick={() => setShowHomeView(false)} className={!showHomeView ? 'pageHead-nav-list-item active' : 'pageHead-nav-list-item'}>{favoritesListData.length} Favorites List</button></li>
          </ul>
        </nav>
      </header>
      {
        showHomeView ? 
          <GalleryView handleFavoritesList={handleFavoritesList} /> 
        : 
          <WishListView handleFavoritesList={handleFavoritesList} favoritesList={favoritesListData} />
      }
    </main>
  )
}

export default App
