import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ImageListItem, {ImageListItemInterface} from "./ImageListItem";

interface ImageListInterface {
    albumID?: number;
}

const fetchGalleries = async ({albumID}:ImageListInterface) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`
  ).then((response) => response.json());

const ImageList = ({albumID}:ImageListInterface): React.ReactElement => {
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
        <div className="galleryList">
            {photoListData.map((photoList: any) => (
                <ImageItem key={photoList.id} id={photoList.id} albumId={photoList.albumId} title={photoList.title} thumbnailUrl={photoList.thumbnailUrl} />
            ))}
        </div>
        {isSpinning && <Spinner />}
      </>
    )
}

export default ImageList