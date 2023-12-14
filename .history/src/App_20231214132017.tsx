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
      <header className="pageHead">
        <h1 className="pageHead-title">Gallery</h1>
        <nav className="pageHead-nav">
          <ul className="pageHead-nav-list">
            <li onClick={() => setShowHomeView(true)} className={showHomeView ? 'pageHead-nav-list-item active' : 'pageHead-nav-list-item'}>Home</li>
            <li onClick={() => setShowHomeView(false)} className={!showHomeView ? 'pageHead-nav-list-item active' : 'pageHead-nav-list-item'}>WishList</li>
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
