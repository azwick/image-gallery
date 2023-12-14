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
    const [galleries, setGalleries] = useState<Array<ImageListItemInterface>>([]);
  
    useEffect(() => {
      fetchGalleries({albumID}).then((data) => {
        setGalleries(data);
        setIsSpinning(false);
      });
    }, []);

    return (
      <>
        <div className="galleryList">
            {galleries.map((gallery: any) => (
                <ImageListItem key={gallery.id} id={gallery.id} albumId={gallery.albumId} title={gallery.title} thumbnailUrl={gallery.thumbnailUrl} />
            ))}
        </div>
        {isSpinning && <Spinner />}
      </>
    )
}

export default ImageList