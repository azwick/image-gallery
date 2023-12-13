
import React, { useState } from "react";

export interface ImageListItemInterface {
  id: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
}

const ImageListItem = ({ id, title, thumbnailUrl }: ImageListItemInterface) => {

    const [wishList, setWishList] = useState(0);

    const addToWishList = (id: number) => { 
        console.log(id)
        setWishList(id)
    }

  return (
    <>
    <div className="galleryList-item">
      {/* {console.log(albumId, title)} */}
      <img src={thumbnailUrl} alt={title} />
      <div onClick={() => addToWishList(id)} className="addIcon">
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg>
      </div>
    </div>
    </>
  );
};

export default ImageListItem;
