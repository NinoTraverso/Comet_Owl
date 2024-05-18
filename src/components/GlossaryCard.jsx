import React from "react";

function GlossaryCard(props) {
  const className = `glossary glossary${props.id}`;

  return (
    <div id="glossaryCards" className={`${className}`}>
      <div className="d-flex flex-column justify-content-center aling-items-center ">
        <h2 className="term glossaryTerm text-center text-primary">
          {props.term}
        </h2>

        <h5 className="description glossaryDescription text-center">
          {props.description}
        </h5>
      </div>
    </div>
  );
}

export default GlossaryCard;
