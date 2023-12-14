import React, { useEffect, useState } from "react";
import Accordion from "./components/Accordion";

export interface PhotoAlbumInterface {
  id: number;
  title: string;
  albumID?: number;
}

const fetchPhotoAlbum = async () =>
    await fetch(
    `https://jsonplaceholder.typicode.com/albums`
    ).then((response) => response.json());

const GalleryView = ({handleFavoritesList}:any): React.ReactElement => { 
  const [isLoading, setIsLoading] = useState(true);
  const [photoAlbumData, setPhotoAlbumData] = useState<Array<PhotoAlbumInterface>>([]);

  useEffect(() => {
    fetchPhotoAlbum().then((data) => {
        setPhotoAlbumData(data);
        setIsLoading(false);
    });
  }, []);


    return (
      <>
        <section className="viewHead">
          <h2 className="viewHead-title">Home</h2>
        </section>
        <Accordion 
          photoAlbumData={photoAlbumData}
          isLoading={isLoading}
          handleFavoritesList={handleFavoritesList}
        />
      </>
    )
}

export default GalleryView;