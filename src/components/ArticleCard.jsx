import React from "react";

function ArticleCard(props) {
  const className = `article article${props.id}`;

  return (
    <div id="articleCard" className={`${className}`}>
      <div className="d-flex flex-column justify-content-between">
        <h3 className="name articleName text-center">{props.title}</h3>
        <h5 className="details articleDetails">{props.frontImage}</h5>
        <h3 className="name articleName text-center">{props.introduction}</h3>
        <h5 className="details articleDetails">{props.background}</h5>
        <h3 className="name articleName text-center">{props.main}</h3>
        <h5 className="details articleDetails">{props.illustrationOne}</h5>
        <h3 className="name articleName text-center">
          {props.illustrationTwo}
        </h3>
        <h5 className="details articleDetails">{props.discussion}</h5>
        <h3 className="name articleName text-center">
          {props.conlcusionImage}
        </h3>
        <h5 className="details articleDetails">{props.conclusion}</h5>
        <h3 className="name articleName text-center">{props.references}</h3>
        <h5 className="details articleDetails">{props.author}</h5>
      </div>
    </div>
  );
}

export default ArticleCard;
