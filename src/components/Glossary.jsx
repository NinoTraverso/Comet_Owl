import React, { useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSelectedLetter("");
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchQuery("");
  };

  const handleAllClick = () => {
    setSelectedLetter("");
    setSearchQuery("");
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredGlossary = glossary.filter((item) => {
    if (selectedLetter) {
      return item.term.toLowerCase().startsWith(selectedLetter.toLowerCase());
    }
    return item.term.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <div className="nav-separator"></div>
      <h1 className="text-secondary">Glossary</h1>
      <div className="d-flex flex-row">
        <div className="mb-3 w-25">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-link" onClick={handleAllClick}>
            All
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              className="btn btn-link"
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
      <div className="row mb-5 mx-1">
        {filteredGlossary.map(createGlossaryCard)}
      </div>
    </div>
  );
}

export default Glossary;
