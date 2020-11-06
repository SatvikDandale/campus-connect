import React, { useState } from "react";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import SubjectIcon from "@material-ui/icons/Subject";
import "./photosTab.css";
import Post from "../Post/post";
import PhotoPost from "../PhotoPost/photoPost";

const posts = [
  {
    timeStamp: "2020-11-06T14:39:32.960Z",
    caption: " Photo 2",
    postID: "51b7553c-9074-403f-ab9a-1a2885f077c1",
    userName: "satvik",
    url:
      "https://s3.us-east-1.amazonaws.com/media-service-campus-connect/1604673566259-200118-SQUARE.png",
  },
  {
    timeStamp: "2020-11-06T14:39:32.960Z",
    caption: " Photo 2",
    postID: "51b7553c-9074-403f-ab9a-1a2885f077c1",
    userName: "satvik",
    url:
      "https://s3.us-east-1.amazonaws.com/media-service-campus-connect/1604673566259-200118-SQUARE.png",
  },
  {
    timeStamp: "2020-11-06T14:39:32.960Z",
    caption: " Photo 2",
    postID: "51b7553c-9074-403f-ab9a-1a2885f077c1",
    userName: "satvik",
    url:
      "https://s3.us-east-1.amazonaws.com/media-service-campus-connect/1604673566259-200118-SQUARE.png",
  },
  {
    timeStamp: "2020-11-06T14:39:06.590Z",
    caption: "Adding a Phot",
    postID: "545be275-ec34-440d-afac-ddb87105311d",
    userName: "satvik",
    url:
      "https://s3.us-east-1.amazonaws.com/media-service-campus-connect/1604673539998-beach_97-wallpaper-1024x1024.png",
  },
  {
    timeStamp: "2020-11-06T14:38:52.816Z",
    caption: "Adding a Photo Caption",
    postID: "e61c7b3b-c370-4dca-9959-92d0aa7e26f4",
    userName: "satvik",
  },
];

export default function PhotosTab(props) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="photos__section">
      <div className="photos__tabs">
        <div
          className={`tab__item ${current === 0 ? "active" : ""}`}
          onClick={() => {
            setCurrent(0);
          }}
        >
          <ViewQuiltIcon />
          Photos
        </div>
        <div
          className={`tab__item ${current === 1 ? "active" : ""}`}
          onClick={() => {
            setCurrent(1);
          }}
        >
          <SubjectIcon />
          Scribbles
        </div>
      </div>
      {current === 0 ? (
        <div className="photos">
          {posts.map((post) => {
            if (post.url) return <PhotoPost post={post} />;
          })}
        </div>
      ) : (
        <div className="scribbles">
          {posts.map((post) => {
            if (!post.url) return <Post post={post} />;
          })}
        </div>
      )}
    </div>
  );
}
