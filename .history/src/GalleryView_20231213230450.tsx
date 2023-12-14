import React, { useEffect, useState } from "react";
import Accordion from "./components/Accordion";

export interface PhotoAlbumInterface {
  id: number;
  title: string;
  albumID?: number;
}

const Gallery = (): React.ReactElement => { 
  const [photoAlbumList, setPhotoAlbumList] = useState<Array<PhotoAlbumInterface>>([]);

    return (
      <>
        <section className="viewHead">
          <h2 className="viewHead-title">Home</h2>
        </section>
        <Accordion/>
      </>
    )
}

export default Gallery;