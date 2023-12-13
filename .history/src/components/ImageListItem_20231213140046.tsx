import React from "react";

export interface Photo {
  id?: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
}

const ImageListItem = ({ title, albumId, thumbnailUrl }: Photo): React.ReactElement => {
  return (
    <div className="thumbnail">
      {/* <p>{albumId}</p> */}
      {/* <p>{title}</p> */}
      <img src={thumbnailUrl} alt={title} />
    </div>
  );
};

export default PhotoItem;
