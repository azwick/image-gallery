import ImageListItem from "./components/ImageListItem";
import './styles/styles.scss';

const WishListView = ({ handleWishList, favoritesList }:any) => {

    return (
      <>
        <section className="viewHead">
          <h2 className="viewHead-title">Wishlist</h2>
        </section>

        <section className="wishList">
          {favoritesList.length > 0 ? 
                <>
                <div className="galleryList">
                    {favoritesList.map((wishListItem: any) => (
                      <ImageListItem 
                        key={wishListItem.id} 
                        id={wishListItem.id} 
                        albumId={wishListItem.albumId} 
                        title={wishListItem.title} 
                        url={wishListItem.url} 
                        thumbnailUrl={wishListItem.thumbnailUrl}
                        handleWishList={handleWishList}
                        />
                    ))}
                </div>
                </>
              : 
              <div className="emptyState">You don't have any favorites yet. Go for it!</div>
              }
          </section>
      </>
    )
}

export default WishListView;