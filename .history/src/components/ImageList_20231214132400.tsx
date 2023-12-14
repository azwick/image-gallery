import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ImageListItem, {ImageListItemInterface} from "./ImageListItem";
import "./imageList.scss"

interface ImageListInterface {
    albumID?: number;
    handleFavoritesList?: any;
}

const fetchGalleries = async ({albumID}:ImageListInterface) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`
  ).then((response) => response.json());

const ImageList = ({albumID, handleFavoritesList}:ImageListInterface): React.ReactElement => {
    const [isSpinning, setIsSpinning] = useState(true);
    const [photoListData, setPhotoListData] = useState<Array<ImageListItemInterface>>([]);
  
    useEffect(() => {
      fetchGalleries({albumID}).then((data) => {
        setPhotoListData(data);
        setIsSpinning(false);
      });
    }, []);

    return (
      <>
        <div className="imageList">
            {photoListData.map((photoList: any) => (
                <ImageListItem 
                key={photoList.id} 
                id={photoList.id} 
                albumId={photoList.albumId} 
                title={photoList.title} 
                thumbnailUrl={photoList.thumbnailUrl} 
                url={photoList.url} 
                handleFavoritesList={handleFavoritesList}
                />
            ))}
        </div>
        {isSpinning && <Spinner />}
      </>
    )
}

export default ImageList