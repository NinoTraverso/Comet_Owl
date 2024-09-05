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
            {/* --------------------------------------------- INTRODUCTION ---------------------------------------------------*/}
            <h5 className="details articleDetails clearfix my-5">
              <div className="illustrationOne d-inline-flex flex-column">
                <img
                  src={props.illustrationOne || ""}
                  alt={props.title || ""}
                  className="illustrationOne"
                />
                <span className="d-flex align-self-center">
                  {props.imageReferenceOne || ""}
                </span>
              </div>
              {props.textOne || ""}
            </h5>
            {/* --------------------------------------------- TEXT TWO & ILLUSTRATION TWO ---------------------------------------------------*/}
            <h5 className="details articleDetails clearfix my-5">
              <div className="illustrationTwo d-flex flex-column justify-content-center my-0 mx-0">
                <img
                  src={props.illustrationTwo || ""}
                  alt={props.title || ""}
                  className="illustrationTwo"
                />
                <span className="d-flex align-self-center">
                  {props.imageReferenceTwo || ""}
                </span>
              </div>
              {props.textTwo || ""}
            </h5>
            {/* --------------------------------------------- TEXT THREE  ---------------------------------------------------*/}
            <h5 className="details articleDetails">{props.textThree || ""}</h5>
            {/* --------------------------------------------- CONCLUSION IMAGE  ---------------------------------------------------*/}
            <div className="details articleDetails d-flex justify-content-center my-5">
              <img
                src={props.conclusionImage || ""}
                alt={props.title || ""}
                className="conclusionImage my-4"
              />
            </div>
            {/* --------------------------------------------- CONCLUSIONS ---------------------------------------------------*/}
            <h5 className="details articleDetails d-flex justify-content-center my-5">
              {props.conclusion || ""}
            </h5>
            {/* --------------------------------------------- REFERENCES  ---------------------------------------------------*/}
            <h5 className="name articleName text-center my-2">
              {props.references || ""}
            </h5>
            {/* --------------------------------------------- AUTHOR  ---------------------------------------------------*/}
            <h5 className="details articleDetails">{props.author || ""}</h5>

            {/* --------------------------------------------- BUTTON TO CLOSE ARTICLE  ---------------------------------------------------*/}
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
