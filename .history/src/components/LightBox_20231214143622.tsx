import "./lightbox.scss"

const Lightbox = ({url, title}: any) => {
    return (
        <div className="lightbox">
            <div className="lightbox-content">
            <img src={url} alt={title} />
            </div>
        </div>
    )
}

export default Lightbox