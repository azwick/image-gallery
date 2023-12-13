
import React, { useState } from "react";

export interface ImageListItemInterface {
  id: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
}

const ImageListItem = ({ albumId, id, title, thumbnailUrl }: ImageListItemInterface) => {

    const [selectedPhoto, setSelectedPhoto] = useState(false);
    const [wishList, setWishList] = useState(0);

    const addToWishList = (albumId: number, id: number) => { 
        console.log('AlbumID: '+ albumId, 'PhotoID: ' + id )
        setWishList(id)
    }

  return (
    <>
    <div className="galleryList-item">
      {/* {console.log(albumId, title)} */}
      <img src={thumbnailUrl} alt={title} />
      <div onClick={() => addToWishList(albumId, id)} className="addIcon">
        {selectedPhoto ?
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>
            :
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg>
        }
        </div>
    </div>
    </>
  );
};

export default ImageListItem;
