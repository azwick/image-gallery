import { useState } from 'react'


const Accordion = () => {
    const [open, setOpen] = useState(false)
  
    const toggleGallery = () => {
      setOpen(!open)
    }

    
    return (
        <section className="accordionList">

        <article className="accordionList-item">
          <button className="accordionList-item-title" onClick={toggleGallery}>
            <span className="accordionList-item-title-text">Gallery Title</span>
            <span className={open ? "accordionList-item-title-trigger open" : "accordionList-item-title-trigger"}>→</span>
          </button>
          {open &&
            <div className={ "accordionList-item-content"}>
                {/* Start Gallery */}
                <div className="galleryList">
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
                {/* End Gallery */}
            </div>
         }
        </article>

      </section>
    )
}

export default Accordion;