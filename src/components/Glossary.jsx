import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

import GlossaryCard from "./GlossaryCard";
import glossary from "../glossary";

function createGlossaryCard(glossary) {
  return (
    <div
      key={glossary.id}
      className="col-12 col-xl-4 mb-5 d-flex justify-content-center"
    >
      <GlossaryCard
        id={glossary.id}
        term={glossary.term}
        description={glossary.description}
      />
    </div>
  );
}

function Glossary() {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <div className="nav-separator"></div>
      <h1 className="text-warning">Glossary List</h1>

      <div className="row mb-5 mx-1">{glossary.map(createGlossaryCard)}</div>
    </div>
  );
}

export default Glossary;
