import { PhotoAlbumInterface } from '../GalleryView';
import ImageGrid from './ImageGrid'
import Spinner from "./Spinner";
import React, { useState } from "react";

interface AccordionInterface {
    photoAlbumList: Array<PhotoAlbumInterface>;
    isLoading: boolean;
}

const Accordion = ({photoAlbumList, isLoading}: AccordionInterface): React.ReactElement => {
    // const [open, setOpen] = useState(false)
    const [openThisGallery, setOpenThisGallery] = useState(0)
  
    const toggleGallery = (galleryID: number) => {
        setOpenThisGallery(galleryID)
        // setOpen(!open)
        // --------> ToDo: Close Toggle if open!
        // console.log(open, openThisGallery)
    }
    
    return (
      <section className="accordionList">
        {photoAlbumList.map((photoAlbumData: PhotoAlbumInterface) => (
            <article key={photoAlbumData.id} className="accordionList-item">
            <button className="accordionList-item-title" onClick={() => toggleGallery(photoAlbumData.id)}>
                <span className="accordionList-item-title-text">{photoAlbumData.title}</span>
                <span className="accordionList-item-title-trigger">
                    {openThisGallery ===  photoAlbumData.id ? 
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/></svg>
                    :
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>                
                    }
                </span>
            </button>
            {openThisGallery ===  photoAlbumData.id &&
                <div className="accordionList-item-content">
                    <ImageGrid albumID={photoAlbumData.id} />
                </div>
            }
            </article>
        ))}
        {isLoading && <Spinner />}
      </section>
    )
}

export default Accordion;