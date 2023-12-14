import ImageListItem, { ImageListItemInterface } from "./components/ImageListItem";

interface FavoritesViewInterface {
  handleFavoritesList: (albumId: number, id: number, title: string, url: string, thumbnailUrl: string) => void;
  favoritesList: Array<ImageListItemInterface>;
}

const FavoritesView = ({ handleFavoritesList, favoritesList }:FavoritesViewInterface) => {

    return (
      <>
        <section className="viewHead">
          <h2 className="viewHead-title">Favorites List</h2>
        </section>

        <section className="card">
          {favoritesList.length > 0 ? 
                <>
                <div className="imageList">
                    {favoritesList.map((wishListItem: ImageListItemInterface) => (
                      <ImageListItem 
                        key={wishListItem.id} 
                        id={wishListItem.id} 
                        albumId={wishListItem.albumId} 
                        title={wishListItem.title} 
                        url={wishListItem.url} 
                        thumbnailUrl={wishListItem.thumbnailUrl}
                        defaultSelectionValue={true}
                        handleFavoritesList={handleFavoritesList}
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

export default FavoritesView;