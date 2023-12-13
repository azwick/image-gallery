// import React, { useEffect, useState } from "react";
// import GalleryItem, { Gallery } from "./GalleryItem";
// import Spinner from "./Spinner";

// const fetchGalleries = async () =>
//   await fetch(
//     `https://jsonplaceholder.typicode.com/albums`
//   ).then((response) => response.json());

// const GalleryList = (): React.ReactElement => {
//   const [isSpinning, setIsSpinning] = useState(true);
//   const [galleries, setGalleries] = useState<Array<Gallery>>([]);

//   useEffect(() => {
//     fetchGalleries().then((data) => {
//       setGalleries(data);
//       setIsSpinning(false);
//     });
//   }, []);

//   return (
//     <section className="galleries">
//       {galleries.map((gallery: Gallery) => (
//         <GalleryItem key={gallery.id} title={gallery.title} albumID={gallery.id} />
//       ))}
//       {isSpinning && <Spinner />}
//     </section>
//   );
// };

// export default GalleryList;




import ImageGrid from './ImageGrid'
import GalleryItem, { Gallery } from "./GalleryItem";
import Spinner from "./Spinner";
import React, { useEffect, useState } from "react";




const fetchGalleries = async () =>
await fetch(
`https://jsonplaceholder.typicode.com/albums`
).then((response) => response.json());


const Accordion = () => {
    const [open, setOpen] = useState(false)
  
    const toggleGallery = () => {
      setOpen(!open)
    }

    const [isSpinning, setIsSpinning] = useState(true);
    const [galleries, setGalleries] = useState<Array<Gallery>>([]);

    useEffect(() => {
    fetchGalleries().then((data) => {
        setGalleries(data);
        setIsSpinning(false);
    });
}, []);

    
    return (
        <section className="accordionList">

        <article className="accordionList-item">
          <button className="accordionList-item-title" onClick={toggleGallery}>
            <span className="accordionList-item-title-text">Gallery Title</span>
            <span className={open ? "accordionList-item-title-trigger open" : "accordionList-item-title-trigger"}>→</span>
          </button>
          {open &&
            <div className="accordionList-item-content">
                <ImageGrid />

                {galleries.map((gallery: Gallery) => (
                    <GalleryItem key={gallery.id} title={gallery.title} albumID={gallery.id} />
                ))}
                {isSpinning && <Spinner />}
            </div>
         }
        </article>

      </section>
    )
}

export default Accordion;