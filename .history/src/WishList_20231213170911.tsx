
import React, { useEffect, useState } from "react";

const testData = [
    {
        albumId: 1,
        id: 12,
        title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        url: "https://via.placeholder.com/600/66b7d2",
        thumbnailUrl: "https://via.placeholder.com/150/66b7d2"
      },
      {
        albumId: 2,
        id: 87,
        title: "eos nihil sunt accusantium omnis",
        url: "https://via.placeholder.com/600/224566",
        thumbnailUrl: "https://via.placeholder.com/150/224566"
      },
      {
        albumId: 2,
        id: 88,
        title: "inventore veritatis magnam enim quasi",
        url: "https://via.placeholder.com/600/75334a",
        thumbnailUrl: "https://via.placeholder.com/150/75334a"
      },
  ];


export interface WishListItem {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

const WishList = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [wishList, setwishList] = useState<Array<WishListItem>>(testData);
  
    const addItem = (userInput: string): void => {
      const keyId = currentIndex;
      wishList.push({ id: keyId, task: userInput, done: false });
      setwishList(wishList);
      setCurrentIndex(currentIndex + 1);
    };
  
    const deleteItem = (id: number): void => {
      const updateList = wishList.filter((wish) => wish.id !== id);
      setwishList(updateList);
    };
  
    const completeItem = (id: number): void => {
      const updateList = wishList.map((wish) =>
        wish.id === id ? { ...wish, done: !wish.done } : wish
      );
      setwishList(updateList);
    };






    return (
      <>

        <div className="testitest">
            <h2>Wishlist</h2>
        </div>

        <section className="wishList">
            <div className="emptyState">You don't have any favorites yet. Go for it!</div>

            {/* <div className="galleryList">
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
            </div> */}

            <div className="galleryList">
                {galleries.map((gallery: any) => (
                    <ImageListItem key={gallery.id} id={gallery.id} albumId={gallery.albumId} title={gallery.title} thumbnailUrl={gallery.thumbnailUrl} />
                ))}
            </div>
            {isSpinning && <Spinner />}

        </section>
      </>
    )
}

export default WishList;