import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ImageListItem, {ImageItemInterface} from "./ImageItem";

interface ImageListInterface {
    albumID?: number;
    handleWishList?: any;
}

const fetchGalleries = async ({albumID}:ImageListInterface) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`
  ).then((response) => response.json());

const ImageList = ({albumID, handleWishList}:ImageListInterface): React.ReactElement => {
    const [isSpinning, setIsSpinning] = useState(true);
    const [photoListData, setPhotoListData] = useState<Array<ImageItemInterface>>([]);
  
    useEffect(() => {
      fetchGalleries({albumID}).then((data) => {
        setPhotoListData(data);
        setIsSpinning(false);
      });
    }, []);

    return (
      <>
        <div className="galleryList">
            {photoListData.map((photoList: any) => (
                <ImageListItem 
                key={photoList.id} 
                id={photoList.id} 
                albumId={photoList.albumId} 
                title={photoList.title} 
                thumbnailUrl={photoList.thumbnailUrl} 
                url={photoList.url} 
                handleWishList={handleWishList}
                />
            ))}
        </div>
        {isSpinning && <Spinner />}
      </>
    )
}

export default ImageList