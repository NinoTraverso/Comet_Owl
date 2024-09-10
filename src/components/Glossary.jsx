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
      <br className="d-none d-xl-block" />
      <br className="d-none d-xl-block" />
      <br className="d-none d-xl-block" />
      <br className="d-none d-xl-block" />
      <br className="d-none d-xl-block" />
      <br className="d-none d-xl-block" />
      <br />
      <br className="d-flex d-md-none" />
      <br className="d-flex d-md-none" />

      <div className="d-flex flex-column flex-md-row mx-5">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="mb-3">
          <button
            className="btn btn-link text-secondary text-decoration-none"
            onClick={handleAllClick}
          >
            All
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              className="btn btn-link text-light text-decoration-none"
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
