import { PhotoAlbumInterface } from '../GalleryView';
import ImageGrid from './ImageGrid'
import { ClosedArrow, OpenArrow } from './SVGs';
import Spinner from "./Spinner";
import React, { useState } from "react";

interface AccordionInterface {
    photoAlbumData: Array<PhotoAlbumInterface>;
    isLoading: boolean;
    handleWishList: any;
}

const Accordion = ({photoAlbumData, isLoading, handleWishList}: AccordionInterface): React.ReactElement => {
    const [open, setOpen] = useState(false)
    const [openThisGallery, setOpenThisGallery] = useState(0)
  
    const toggleGallery = (galleryID: number) => {
        setOpenThisGallery(galleryID)
        setOpen(!open)
    }
    
    return (
      <section className="accordionList">
        {photoAlbumData.map((photoAlbum: PhotoAlbumInterface) => (
            <article key={photoAlbum.id} className="accordionList-item">
            <button className="accordionList-item-title" onClick={() => toggleGallery(photoAlbum.id)}>
                <span className="accordionList-item-title-text">{photoAlbum.title}</span>
                <span className="accordionList-item-title-trigger">
                    {open && openThisGallery ===  photoAlbum.id ? 
                    <OpenArrow/>
                    :
                    <ClosedArrow/>
                    }
                </span>
            </button>
            <div className={open && openThisGallery ===  photoAlbum.id ? "accordionList-item-content open" : "accordionList-item-content"}>
                <ImageGrid albumID={photoAlbum.id} handleWishList={handleWishList} />
            </div>
            </article>
        ))}
        {isLoading && <Spinner />}
      </section>
    )
}

export default Accordion;