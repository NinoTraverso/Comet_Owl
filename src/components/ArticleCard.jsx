import React, { useState } from "react";

function ArticleCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const className = `article article${props.id}`;

  return (
    <div id="articleCard" className={`${className}`}>
      <div className="article-content d-flex flex-column justify-content-center align-items-center">
        <h1
          className="name articleName text-center my-4"
          onClick={handleToggle}
        >
          {props.title || ""}
        </h1>
        <div id="frontImage" onClick={handleToggle} className="image-container">
          <img
            src={props.frontImage || ""}
            alt={props.title || ""}
            className="article-image"
          />
        </div>
        {isExpanded && (
          <div className="expanded-content">
            <h5 className="name articleName text-center my-5">
              {props.introduction || ""}
            </h5>
            <h5 className="details articleDetails">{props.background || ""}</h5>
            <h5 className="name articleName text-center my-2">
              {props.main || ""}
            </h5>
            <h5 className="details articleDetails">
              <img
                src={props.illustrationOne || ""}
                alt={props.title || ""}
                className="illustrationOne d-flex flex-left text-nowrap"
              />
            </h5>
            <h5 className="name articleName text-center my-2">
              <img
                src={props.illustrationTwo || ""}
                alt={props.title || ""}
                className="illustrationTwo"
              />
            </h5>
            <h5 className="details articleDetails">{props.discussion || ""}</h5>
            <h5 className="name articleName text-center my-2">
              {props.conlcusionImage || ""}
            </h5>
            <h5 className="details articleDetails">{props.conclusion || ""}</h5>
            <h5 className="name articleName text-center my-2">
              {props.references || ""}
            </h5>
            <h5 className="details articleDetails">{props.author || ""}</h5>
            <button onClick={handleToggle} className="articleButton">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleCard;
