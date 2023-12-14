
import { useState } from "react";
import { HeartFilled, HeartStroke } from "./SVGs";

export interface ImageListItemInterface {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  handleWishList?: any;
}

const ImageListItem = ({ albumId, id, title, url, thumbnailUrl, handleWishList }: ImageListItemInterface) => {
  const [selectedPhoto, setSelectedPhoto] = useState(false);

  const handleClick = (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => {
    handleWishList(albumId, id, title, url, thumbnailUrl);
    setSelectedPhoto(!selectedPhoto)
  }

  return (
    <>
    <div className="imageList-item">
      <img src={thumbnailUrl} alt={title} />

        <div onClick={() => handleClick(albumId, id, title, url, thumbnailUrl)} className="addIcon">
          {selectedPhoto ?
              <HeartFilled/>
              :
              <HeartStroke/>
              }
          </div>
    </div>
    </>
  );
};

export default ImageListItem;
