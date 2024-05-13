import React from "react";

function GlossaryCard(props) {
  const className = `glossary glossary${props.id}`;

  return (
    <div id="glossaryCards" className={`${className}`}>
      <div className="d-flex flex-column justify-content-center aling-items-center">
        <h1 className="term glossaryTerm text-center">{props.term}</h1>

        <h5 className="description glossaryDescription">{props.description}</h5>
      </div>
    </div>
  );
}

export default GlossaryCard;