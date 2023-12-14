import { PhotoAlbumInterface } from '../GalleryView';
import ImageGrid from './ImageList'
import { ClosedArrowIcon, OpenArrowIcon } from './SVGs';
import Spinner from "./Spinner";
import React, { useState } from "react";
import './accordion.scss';

interface AccordionInterface {
    photoAlbumData: Array<PhotoAlbumInterface>;
    isLoading: boolean;
    handleFavoritesList: (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => void;
}

const Accordion = ({photoAlbumData, isLoading, handleFavoritesList}: AccordionInterface): React.ReactElement => {
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
            <button onClick={() => toggleGallery(photoAlbum.id)} className={open && openThisGallery ===  photoAlbum.id ? "accordionList-item-title active" : "accordionList-item-title"}>
                <span className="accordionList-item-title-text">{photoAlbum.title}</span>
                <span className="accordionList-item-title-trigger">
                    {open && openThisGallery ===  photoAlbum.id ? 
                    <OpenArrowIcon/>
                    :
                    <ClosedArrowIcon/>
                    }
                </span>
            </button>
            <div className={open && openThisGallery ===  photoAlbum.id ? "accordionList-item-content active" : "accordionList-item-content"}>
                <ImageGrid albumID={photoAlbum.id} handleFavoritesList={handleFavoritesList} />
            </div>
            </article>
        ))}
        {isLoading && <Spinner />}
      </section>
    )
}

export default Accordion;