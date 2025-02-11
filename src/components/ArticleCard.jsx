import React from "react";
import { useNavigate } from "react-router-dom";

function ArticleCard({ id, title, frontImage, briefing }) {
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
      <div className="col article-content d-flex flex-column flex-xl-row justify-content-center align-items-center">
        <div className="col-10 col-md-6 d-block d-xl-none">
          <h2 className="name articleNameCard text-center mt-3 mb-1 ">
            {title}
          </h2>
          <h6 className="name articleBriefing text-center my-3">{briefing}</h6>
        </div>
        <div id="frontImage" className="image-container col-12 col-xl-8">
          <img src={frontImage} alt={title} className="article-image" />
        </div>
        <div className="d-flex flex-column d-none d-xl-block col-8  align-self-start">
          <h3 className="name articleNameCard d-flex flex-start mt-1 mb-1 mx-2">
            {title}
          </h3>
          <h6 className="name articleBriefing my-1 mx-2">{briefing}</h6>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
