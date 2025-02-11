import React from "react";
import { useNavigate } from "react-router-dom";

function ArticleCard({ id, title, frontImage }) {
  const navigate = useNavigate();

  const slug = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");

  const handleClick = () => {
    navigate(`/articles/${slug}?id=${id}`);
  };

  return (
    <div
      id="articleCard"
      className={`article article${id}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="article-content d-flex flex-column justify-content-center align-items-center">
        <h2 className="name articleName text-center my-4">{title}</h2>
        <div id="frontImage" className="image-container">
          <img src={frontImage} alt={title} className="article-image" />
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
