
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
    <div onClick={() => addToWishList(id)} className="galleryList-item">
      {/* {console.log(albumId, title)} */}
      <img src={thumbnailUrl} alt={title} />

    </div>
    </>
  );
};

export default ImageListItem;
