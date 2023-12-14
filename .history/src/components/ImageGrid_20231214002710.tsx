import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ImageItem, {ImageItemInterface} from "./ImageListItem";

interface ImageListInterface {
    albumID?: number;
    createWishListData?: any;
}

const fetchGalleries = async ({albumID}:ImageListInterface) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`
  ).then((response) => response.json());

const ImageList = ({albumID, createWishListData}:ImageListInterface): React.ReactElement => {
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
                <ImageItem key={photoList.id} id={photoList.id} albumId={photoList.albumId} title={photoList.title} thumbnailUrl={photoList.thumbnailUrl} createWishListData={createWishListData} />
            ))}
        </div>
        {isSpinning && <Spinner />}
      </>
    )
}

export default ImageList