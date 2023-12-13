import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ImageListItem, {ImageListItemInterface} from "./ImageListItem";

interface Testitest {
    albumID?: number;
}

const fetchGalleries = async ({albumID}:Testitest) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`
  ).then((response) => response.json());

const ImageGrid = ({albumID}) => {

    const [isSpinning, setIsSpinning] = useState(true);
    const [galleries, setGalleries] = useState<Array<ImageListItemInterface>>([]);
  
    useEffect(() => {
      fetchGalleries({albumID}).then((data) => {
        setGalleries(data);
        setIsSpinning(false);
      });
    }, []);

    return (
        <div className="galleryList">

        {galleries.map((gallery: any) => (
            <ImageListItem key={gallery.id} albumId={gallery.albumId} title={gallery.title} thumbnailUrl={gallery.thumbnailUrl} />
        ))}


            <div className="galleryList-item">
            TEst
            </div>
            <div className="galleryList-item">
            TEst
            </div>
            <div className="galleryList-item">
            TEst
            </div>
            <div className="galleryList-item">
            TEst
            </div>
        </div>

      {isSpinning && <Spinner />}
    )
}

export default ImageGrid