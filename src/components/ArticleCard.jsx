import React from "react";

function ArticleCard(props) {
  const className = `article article${props.id}`;

  return (
    <div id="articleCard" className={`${className}`}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="name articleName text-center my-4">{props.title}</h1>
        <div id="frontImage">
          <img src={props.frontImage} alt={props.title} />
        </div>
        <h5 className="name articleName text-center my-5">
          {props.introduction}
        </h5>
        <h5 className="details articleDetails">{props.background}</h5>
        <h5 className="name articleName text-center my-2">{props.main}</h5>
        <h5 className="details articleDetails">{props.illustrationOne}</h5>
        <h5 className="name articleName text-center my-2">
          {props.illustrationTwo}
        </h5>
        <h5 className="details articleDetails">{props.discussion}</h5>
        <h5 className="name articleName text-center my-2">
          {props.conlcusionImage}
        </h5>
        <h5 className="details articleDetails">{props.conclusion}</h5>
        <h5 className="name articleName text-center my-2">
          {props.references}
        </h5>
        <h5 className="details articleDetails">{props.author}</h5>
      </div>
    </div>
  );
}

export default ArticleCard;
