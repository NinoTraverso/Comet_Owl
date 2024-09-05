import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

import ArticleCard from "./ArticleCard";
import articles from "../articles";

function createArticleCard(article) {
  return (
    <div
      key={article.id}
      className="col-12 col-xl-6 mb-5 d-flex align-self-center"
    >
      <ArticleCard
        id={article.id}
        title={article.title}
        frontImage={article.frontImage}
        introduction={article.introduction}
        textOne={article.textOne}
        illustrationOne={article.illustrationOne}
        textTwo={article.main}
        illustrationTwo={article.illustrationTwo}
        textThree={article.discussion}
        conclusionImage={article.conlcusionImage}
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

      <div>
        {/*
        <h1 id="articles" className="d-none d-xl-block mt-5">
          ARTICLES
        </h1>
        <h1
          id="articles"
          className="d-none d-md-block d-xl-none text-center mt-5"
        >
          ARTICLES
        </h1>
        <h1 id="articles" className="d-block d-md-none text-center mt-5">
          ARTICLES
        </h1>
        */}
        <div className="column mb-5 mx-1 d-flex flex-column align-items-center">
          {articles.map(createArticleCard)}
        </div>
      </div>
    </div>
  );
}

export default Articles;
