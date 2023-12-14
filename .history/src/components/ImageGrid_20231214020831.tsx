import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ImageItem, {ImageItemInterface} from "./ImageListItem";

interface ImageListInterface {
    albumID?: number;
    addToWishList?: any;
    createFavoritesList?: any;
}

const fetchGalleries = async ({albumID}:ImageListInterface) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`
  ).then((response) => response.json());

const ImageList = ({albumID, addToWishList, createFavoritesList}:ImageListInterface): React.ReactElement => {
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
                <ImageItem 
                key={photoList.id} 
                id={photoList.id} 
                albumId={photoList.albumId} 
                title={photoList.title} 
                thumbnailUrl={photoList.thumbnailUrl} 
                url={photoList.url} 
                addToWishList={addToWishList}
                createFavoritesList={createFavoritesList} />
            ))}
        </div>
        {isSpinning && <Spinner />}
      </>
    )
}

export default ImageList