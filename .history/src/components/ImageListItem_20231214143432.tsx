
import { useState } from "react";
import { HeartFilledIcon, HeartStrokeIcon } from "./SVGs";

export interface ImageListItemInterface {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  defaultSelectionValue?: boolean;
  handleFavoritesList?: any;
  // ToDo: Type Error handleFavoritesList?: (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => void
}

const ImageListItem = ({ albumId, id, title, url, thumbnailUrl, defaultSelectionValue = false, handleFavoritesList }: ImageListItemInterface) => {
  const [selectedPhoto, setSelectedPhoto] = useState(defaultSelectionValue);
  const [showLightbox, setShowLightbox] = useState(false)

  const handleClick = (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => {
    handleFavoritesList(albumId, id, title, url, thumbnailUrl);
    setSelectedPhoto(!selectedPhoto)
  }

  const handleLightbox = () => {
    setShowLightbox(true);
  }

  return (
    <>
      <div className="imageList-item">
        <img onClick={() => handleLightbox()} src={thumbnailUrl} alt={title} />
        <div onClick={() => handleClick(albumId, id, title, url, thumbnailUrl)} className="addIcon">
          {selectedPhoto ?
            <HeartFilledIcon/>
            :
            <HeartStrokeIcon/>
            }
        </div>
        {
          showLightbox && 
          <div className="lightbox">
            <div className="lightbox-content">
              <img src={url} alt={title} />
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default ImageListItem;
