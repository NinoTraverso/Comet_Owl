import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

import ArticleCard from "../ArticleCard";

function createArticleCard(article) {
  return (
    <div
      key={article.id}
      className="col-12 col-xl-4 mb-5 d-flex justify-content-center"
    >
      <ArticleCard
        id={article.id}
        img={article.img}
        name={article.name}
        details={article.description}
        projectLink={article.projectLink}
      />
    </div>
  );
}

function Articles() {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <div className="nav-separator"></div>

      <h1>ARTICLES PAGE</h1>
      <div>
        <h1
          id="projects"
          className="sectionTitle projectsTitleXl d-none d-xl-block mt-5"
        >
          PROJECTS
        </h1>
        <h1
          id="projects"
          className="sectionTitleMedium projectsTitleMd d-none d-md-block d-xl-none text-center mt-5"
        >
          PROJECTS
        </h1>
        <h1
          id="projects"
          className="sectionTitleSmall projectsTitleSm d-block d-md-none text-center mt-5"
        >
          PROJECTS
        </h1>

        <div className="row mb-5 mx-1">
          {ArticleCard.map(createArticleCard)}
        </div>
      </div>
    </div>
  );
}

export default Articles;
