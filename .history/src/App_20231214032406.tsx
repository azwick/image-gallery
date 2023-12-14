import { useState } from 'react'
import './styles/styles.scss';
import WishListView from './WishListView';
import GalleryView from './GalleryView';
import { ImageItemInterface } from './components/ImageListItem';

const App = () => {
  const [showHomeView, setShowHomeView] = useState(true);
  const [favoritesListData, setFavoritesListData] = useState<Array<ImageItemInterface>>([]);


  // const addToWishList = (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => {
  //   const newFavoritesListData:Array<ImageItemInterface> = [
  //     ...favoritesListData,
  //     { albumId, id, title, url, thumbnailUrl },
  //   ];
  //   setFavoritesListData(newFavoritesListData);
  // };


  const addToWishList = (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => {
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
  };

//   const addToWishList = (albumId:number, id:number, title:string, url:string, thumbnailUrl:string) => {
//     favoritesListData.push({ albumId: albumId, id: id, title: title, url: url, thumbnailUrl: thumbnailUrl });
//     setFavoritesListData(favoritesListData)
//     console.log(favoritesListData)
// }


    // const deleteItem = (id: number): void => {
    //   const updateList = wishList.filter((wish) => wish.id !== id);
    //   setWishList(updateList);
    // };

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
          <GalleryView addToWishList={addToWishList} /> 
        : 
          <WishListView favoritesList={favoritesListData} />
      }
      {/* {console.log(favoritesListData)} */}
    </main>
  )
}

export default App
