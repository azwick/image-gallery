import React from "react";

export interface ImageListItemInterface {
  id?: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
}

const ImageListItem = ({ title, albumId, thumbnailUrl }: ImageListItemInterface): React.ReactElement => {
  return (
    <div className="thumbnail">
      {/* <p>{albumId}</p> */}
      {/* <p>{title}</p> */}
      <img src={thumbnailUrl} alt={title} />
    </div>
  );
};

export default PhotoItem;
