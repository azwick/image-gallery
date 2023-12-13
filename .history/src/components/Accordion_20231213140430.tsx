import ImageGrid from './ImageGrid'
import Spinner from "./Spinner";
import React, { useEffect, useState } from "react";


export interface PhotoAlbumInterface {
  id?: number;
  title: string;
  albumID?: number;
}

const fetchPhotoAlbum = async () =>
    await fetch(
    `https://jsonplaceholder.typicode.com/albums`
    ).then((response) => response.json());


const Accordion = (): React.ReactElement => {
    const [open, setOpen] = useState(false)
  
    const toggleGallery = () => {
      setOpen(!open)
    }

    const [isSpinning, setIsSpinning] = useState(true);
    const [photoAlbumList, setPhotoAlbumList] = useState<Array<PhotoAlbumInterface>>([]);

    useEffect(() => {
        fetchPhotoAlbum().then((data) => {
            setPhotoAlbumList(data);
            setIsSpinning(false);
        });
    }, []);

    console.log(photoAlbumList)
    
    return (
        <section className="accordionList">

        {photoAlbumList.map((photoAlbum: PhotoAlbumInterface) => (
            <article key={photoAlbum.id} className="accordionList-item">
            <button className="accordionList-item-title" onClick={toggleGallery}>
                <span className="accordionList-item-title-text">{photoAlbum.title}</span>
                <span className={open ? "accordionList-item-title-trigger open" : "accordionList-item-title-trigger"}>→</span>
            </button>
            {open &&
                <div className="accordionList-item-content">
                    <ImageGrid albumID={photoAlbum.id} />

                    {/* {photoAlbumList.map((gallery: Gallery) => (
                        // <GalleryItem key={gallery.id} title={gallery.title} albumID={gallery.id} />
                        
                    ))}
                    {isSpinning && <Spinner />} */}
                </div>
            }
            </article>
        ))}
    {isSpinning && <Spinner />}

      </section>
    )
}

export default Accordion;