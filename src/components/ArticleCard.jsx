import React from "react";
import { useNavigate } from "react-router-dom";

function ArticleCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${props.id}`);
  };

  return (
    <div
      id="articleCard"
      className={`article article${props.id}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="article-content d-flex flex-column justify-content-center align-items-center">
        <h1 className="name articleName text-center my-4">
          {props.title || ""}
        </h1>
        <div id="frontImage" className="image-container">
          <img
            src={props.frontImage || ""}
            alt={props.title || ""}
            className="article-image"
          />
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
