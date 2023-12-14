import ImageListItem from "./components/ImageListItem";
// import Spinner from "./components/Spinner";

const WishListView = ({ favoritesList }:any) => {

    return (
      <>
        <section className="viewHead">
          <h2 className="viewHead-title">Wishlist</h2>
        </section>

        {console.log(favoritesList)}

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
                          />
                        
                        // <div key={wishListItem.id} className="galleryList-item">
                        //     <img src={wishListItem.thumbnailUrl} alt={wishListItem.title} />

                        //     {/* ------- ONLY WISH ------- */}
                        //     <div onClick={() => deleteItem(wishListItem.id)} className="addIcon">
                        //         <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg>
                        //     </div>

                        // </div>
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