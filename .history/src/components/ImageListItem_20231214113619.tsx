
import { useState } from "react";
import { HeartFilled, HeartStroke } from "./SVGs";
import './styles/styles.scss';

export interface ImageItemInterface {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  handleWishList?: any;
}

const ImageItem = ({ albumId, id, title, url, thumbnailUrl, handleWishList }: ImageItemInterface) => {
  const [selectedPhoto, setSelectedPhoto] = useState(false);

  const handleClick = (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => {
    handleWishList(albumId, id, title, url, thumbnailUrl);
    setSelectedPhoto(!selectedPhoto)
  }

  return (
    <>
    <div className="galleryList-item">
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

export default ImageItem;
