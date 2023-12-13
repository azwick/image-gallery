const Accordion = () => {
    return (
        <section className="accordionList">

        <article className="accordionList-item">
          <button className="accordionList-item-title" onClick={toggleGallery}>
            <span className="accordionList-item-title-text">Gallery Title</span>
            <span className={open ? "accordionList-item-title-trigger open" : "accordionList-item-title-trigger"}>→</span>
          </button>
          <div className={open ? "accordionList-item-content open" : "accordionList-item-content"}>
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
        </article>

      </section>
    )
}

export default Accordion;