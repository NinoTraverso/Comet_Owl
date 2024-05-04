import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

import ArticleCard from "./ArticleCard";
import articles from "../articles";

function createArticleCard(article) {
  return (
    <div
      key={article.id}
      className="col-12 col-xl-4 mb-5 d-flex justify-content-center"
    >
      <ArticleCard
        id={article.id}
        title={article.title}
        frontImage={article.frontImage}
        introduction={article.introduction}
        main={article.main}
        illustrationOne={article.illustrationOne}
        illustrationTwo={article.illustrationTwo}
        discussion={article.discussion}
        conlcusionImage={article.conlcusionImage}
        conclusion={article.conclusion}
        references={article.references}
        author={article.author}
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
          id="articles"
          className="sectionTitle projectsTitleXl d-none d-xl-block mt-5"
        >
          PROJECTS
        </h1>
        <h1
          id="articles"
          className="sectionTitleMedium projectsTitleMd d-none d-md-block d-xl-none text-center mt-5"
        >
          PROJECTS
        </h1>
        <h1
          id="articles"
          className="sectionTitleSmall projectsTitleSm d-block d-md-none text-center mt-5"
        >
          PROJECTS
        </h1>

        <div className="row mb-5 mx-1">{articles.map(createArticleCard)}</div>
      </div>
    </div>
  );
}

export default Articles;
