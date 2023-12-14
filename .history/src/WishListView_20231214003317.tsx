
import React, { useEffect, useState } from "react";
import ImageListItem from "./components/ImageListItem";

// const testData = [
//     {
//         albumId: 1,
//         id: 12,
//         title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
//         url: "https://via.placeholder.com/600/66b7d2",
//         thumbnailUrl: "https://via.placeholder.com/150/66b7d2"
//       },
//       {
//         albumId: 2,
//         id: 87,
//         title: "eos nihil sunt accusantium omnis",
//         url: "https://via.placeholder.com/600/224566",
//         thumbnailUrl: "https://via.placeholder.com/150/224566"
//       },
//       {
//         albumId: 2,
//         id: 88,
//         title: "inventore veritatis magnam enim quasi",
//         url: "https://via.placeholder.com/600/75334a",
//         thumbnailUrl: "https://via.placeholder.com/150/75334a"
//       },
//   ];


export interface WishListItem {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

const WishListView = ({ favoritesList }:any) => {
    // const [isSpinning, setIsSpinning] = useState(true);
    // const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [wishList, setWishList] = useState<Array<WishListItem>>(favoritesList);
  
    // const addItem = (photoId: number): void => {
    //   const keyId = currentIndex;
    //   wishList.push({ albumId: keyId, id: photoId, marked: false });
    //   setWishList(wishList);
    //   setCurrentIndex(currentIndex + 1);
    // };
  
    const deleteItem = (id: number): void => {
      const updateList = wishList.filter((wish) => wish.id !== id);
      setWishList(updateList);
    };


    return (
      <>
        <section className="viewHead">
          <h2 className="viewHead-title">Wishlist</h2>
        </section>

        <section className="wishList">
        {wishList.length > 0 ? 
            <>
            <div className="galleryList">
                {wishList.map((wishListItem: any) => (
                    // <ImageListItem key={wishListItem.id} id={wishListItem.id} albumId={wishListItem.albumId} title={wishListItem.title} thumbnailUrl={wishListItem.thumbnailUrl} />
                    
                    <div key={wishListItem.id} className="galleryList-item">
                        <img src={wishListItem.thumbnailUrl} alt={wishListItem.title} />

                        {/* ------- ONLY WISH ------- */}
                        <div onClick={() => deleteItem(wishListItem.id)} className="addIcon">
                            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg>
                        </div>

                    </div>
                ))}
            </div>
            {/* {isSpinning && <Spinner />} */}
            </>
            : 
            <div className="emptyState">You don't have any favorites yet. Go for it!</div>
            }
        </section>
      </>
    )
}

export default WishListView;