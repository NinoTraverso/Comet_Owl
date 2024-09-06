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
            <h5 className="details articleDetails my-5">
              {props.introduction || ""}
            </h5>
            {/* --------------------------------------------- TEXT ONE ---------------------------------------------------*/}
            <h5 className="details articleDetails my-5">
              {props.textOne || ""}
            </h5>
            {/* --------------------------------------------- TEXT TWO & ILLUSTRATION ONE ---------------------------------------------------*/}
            <h5 className="details articleDetails clearfix my-5">
              <img
                src={props.illustrationOne || ""}
                alt={props.title || ""}
                className="illustrationOne my-2"
              />

              {props.textTwo || ""}
            </h5>
            {/* --------------------------------------------- TEXT THREE & ILLUSTRATION TWO ---------------------------------------------------*/}
            <h5 className="details articleDetails clearfix my-5">
              <img
                src={props.illustrationTwo || ""}
                alt={props.title || ""}
                className="illustrationTwo "
              />

              {props.textThree || ""}
            </h5>
            {/* --------------------------------------------- TEXT FOUR  ---------------------------------------------------*/}
            <h5 className="details articleDetails my-5">
              {props.textFour || ""}
            </h5>
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

            {props.references && (
              <>
                <h4 className="text-secondary">References</h4>
                <p className="details articleDetails d-flex justify-content-center my-5 text-secondary">
                  {props.references}
                </p>
              </>
            )}

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
