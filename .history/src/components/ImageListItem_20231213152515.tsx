import React, {useState} from "react";

export interface ImageListItemInterface {
  id?: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
}

const ImageListItem = ({ title, albumId, thumbnailUrl }: ImageListItemInterface): React.ReactElement => {

    const [openThisPhoto, setOpenThisPhoto] = useState(0)
´
    const showLightbox = (photoID: number) => { 
        console.log(photoID)
        setOpenThisPhoto(photoID)
        // setOpen(!open)
    }

  return (
    <div onClick={() => showLightbox(photoAlbum.id)} className="galleryList-item">
      {/* {console.log(albumId, title)} */}
      <img src={thumbnailUrl} alt={title} />
    </div>
  );
};

export default ImageListItem;
