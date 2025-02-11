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
        introduction={article.introduction}
        frontImage={article.frontImage}
        briefing={article.briefing}
        textOne={article.textOne}
        textTwo={article.textTwo}
        illustrationOne={article.illustrationOne}
        textThree={article.textThree}
        illustrationTwo={article.illustrationTwo}
        textFour={article.textFour}
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
        <div className="column mb-5 mx-1 d-flex flex-column align-items-center">
          {articles.slice().reverse().map(createArticleCard)}
        </div>
      </div>
    </div>
  );
}

export default Articles;
