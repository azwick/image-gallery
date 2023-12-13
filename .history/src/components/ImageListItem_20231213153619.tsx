
import React, { useState } from "react";

export interface ImageListItemInterface {
  id?: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

const ImageListItem = ({ title, albumId, thumbnailUrl, url }: ImageListItemInterface) => {

    const [openThisPhoto, setOpenThisPhoto] = useState('');
    const showLightbox = (photoUrl: string) => { 
        console.log(photoUrl)
        setOpenThisPhoto(photoUrl)
    }

  return (
    <>
    <div onClick={() => showLightbox(url)} className="galleryList-item">
      {/* {console.log(albumId, title)} */}
      <img src={thumbnailUrl} alt={title} />
    </div>
    {openThisPhoto.length > 0 &&
        <div className="lightBox">
            <img src={url} alt={title} />
        </div>
    }
    </>
  );
};

export default ImageListItem;
