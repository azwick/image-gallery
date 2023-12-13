
import React, { useState } from "react";

export interface ImageListItemInterface {
  id?: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

const ImageListItem = ({ title, albumId, thumbnailUrl, url }: ImageListItemInterface) => {

    const [openThisPhoto, setOpenThisPhoto] = useState(0);
    const showLightbox = (photoID: number) => { 
        console.log(photoID)
        setOpenThisPhoto(photoID)
    }

  return (
    <div onClick={() => showLightbox(url)} className="galleryList-item">
      {/* {console.log(albumId, title)} */}
      <img src={thumbnailUrl} alt={title} />
    </div>
  );
};

export default ImageListItem;
