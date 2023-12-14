
import { useState } from "react";

export interface ImageItemInterface {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  createFavoritesList?: any
}

const newData = [
    {
        albumId: 1,
        id: 1,
        title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        url: "https://via.placeholder.com/600/66b7d2",
        thumbnailUrl: "https://via.placeholder.com/150/66b7d2"
      },
      {
        albumId: 2,
        id: 2,
        title: "eos nihil sunt accusantium omnis",
        url: "https://via.placeholder.com/600/224566",
        thumbnailUrl: "https://via.placeholder.com/150/224566"
      },
      {
        albumId: 2,
        id: 3,
        title: "eos nihil sunt accusantium omnis",
        url: "https://via.placeholder.com/600/224566",
        thumbnailUrl: "https://via.placeholder.com/150/224566"
      },
      {
        albumId: 2,
        id: 4,
        title: "inventore veritatis magnam enim quasi",
        url: "https://via.placeholder.com/600/75334a",
        thumbnailUrl: "https://via.placeholder.com/150/75334a"
      },
  ];



const ImageItem = ({ albumId, id, title, url, thumbnailUrl, createFavoritesList }: ImageItemInterface) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [newFavoritesList, setNewFavoritesList] = useState<Array<ImageItemInterface>>([]);


    const [selectedPhoto, setSelectedPhoto] = useState(false);
    const [wishList, setWishList] = useState(0);


    const addToWishList = (albumId: number, id: number) => {
        newFavoritesList.push({ albumId: albumId, id: id, title: title, url: url, thumbnailUrl: thumbnailUrl });
        setNewFavoritesList(newFavoritesList)
        createFavoritesList(newFavoritesList);
        setSelectedPhoto(true)
        console.log(newFavoritesList)
    }

    

    // const deleteItem = (id: number): void => {
    //   setSelectedPhoto(false)
    //   const updateList = wishList.filter((wish) => wish.id !== id);
    //   setWishList(updateList);
    // };


  return (
    <>
    <div className="galleryList-item">
      <img src={thumbnailUrl} alt={title} />
        
      {/* ------- ONLY Gallery ------- */}
      
        {/* {selectedPhoto ?
          <div onClick={() => deleteItem(id)} className="addIcon">
            <svg className="DELETE" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg>
          </div>
          :
          <div onClick={() => addToWishList(albumId, id)} className="addIcon">
            <svg className="ADD" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>  
          </div>
         } */}

        <div onClick={() => addToWishList(albumId, id)} className="addIcon">
          {selectedPhoto ?
              <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg>
              :
              <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
              }
          </div>
    </div>
    </>
  );
};

export default ImageItem;
