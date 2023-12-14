
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

  const handleClick = (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => {
    handleFavoritesList(albumId, id, title, url, thumbnailUrl);
    setSelectedPhoto(!selectedPhoto)
  }

  return (
    <>
      <div className="imageList-item">
        <img src={thumbnailUrl} alt={title} />
        <button onClick={() => handleClick(albumId, id, title, url, thumbnailUrl)} className="imageList-item-actionIcon">
          {selectedPhoto ?
            <HeartFilledIcon/>
            :
            <HeartStrokeIcon/>
            }
        </button>
      </div>
    </>
  );
};

export default ImageListItem;
