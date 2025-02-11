import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import articles from "../articles";

function ArticlePage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const article = articles.find((a) => a.id === parseInt(id));

  useEffect(() => {
    const element = document.querySelector(".nav-separator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (!article) {
    return <h2 className="text-center my-5">Article not found</h2>;
  }

  return (
    <div id="articleCard" className={`article article${article.id} container`}>
      <Helmet>
        {/* Page Title */}
        <title>{article.title} | CometOwl</title>

        {/* Meta Description */}
        <meta name="description" content={article.briefing} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.briefing} />
        <meta property="og:image" content={article.frontImage} />
        <meta
          property="og:url"
          content={`https://cometowl.com/articles/${article.id}`}
        />
        <meta property="og:type" content="article" />

        {/* Twitter Cards */}
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.briefing} />
        <meta name="twitter:image" content={article.frontImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="nav-separator"></div>
      <div className="row justify-content-center">
        <div className="col-12 col-xl-8">
          <div className="article-content d-flex flex-column justify-content-center align-items-center">
            {/* Title */}
            <h1 className="name articleName text-center my-4">
              {article.title}
            </h1>

            {/* Front Image */}
            {article.frontImage && (
              <div id="frontImage" className="image-container my-3">
                <img
                  src={article.frontImage}
                  alt={article.title}
                  className="article-image"
                />
              </div>
            )}

            {/* Introduction */}
            <h5 className="details articleDetails my-5">
              {article.introduction}
            </h5>

            {/* Text One */}
            <h5 className="details articleDetails my-5">{article.textOne}</h5>

            {/* Illustration One + Text Two */}
            <div className="details articleDetails clearfix my-5">
              {article.illustrationOne && (
                <img
                  src={article.illustrationOne}
                  alt="Illustration One"
                  className="illustrationOne"
                />
              )}
              <h5>{article.textTwo}</h5>
            </div>

            {/* Illustration Two + Text Three */}
            <div className="details articleDetails clearfix my-5">
              {article.illustrationTwo && (
                <img
                  src={article.illustrationTwo}
                  alt="Illustration Two"
                  className="illustrationTwo"
                />
              )}
              <h5>{article.textThree}</h5>
            </div>

            {/* Text Four */}
            <h5 className="details articleDetails my-5">{article.textFour}</h5>

            {/* Conclusion Image */}
            {article.conclusionImage && (
              <div className="details articleDetails d-flex justify-content-center my-5">
                <img
                  src={article.conclusionImage}
                  alt="Conclusion"
                  className="conclusionImage"
                />
              </div>
            )}

            {/* Conclusion */}
            <h5 className="details articleDetails d-flex justify-content-center my-5">
              {article.conclusion}
            </h5>
            {/* Author */}
            <h5 className="details articleDetails mb-4">{article.author}</h5>

            {/* References */}
            {article.references && (
              <>
                <h4 className="text-secondary">References</h4>
                <p className="details articleDetails d-flex justify-content-center my-5 text-secondary">
                  {article.references}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="text-decoration-none">
        <h3 className="">Related Articles</h3>
        <ul>
          {articles
            .filter((a) => a.id !== article.id) // Exclude current article
            .slice(0, 3) // Show only 3
            .map((related) => (
              <li key={related.id}>
                <a
                  className="relatedArticleLink text-decoration-none"
                  href={`/articles/${related.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]/g, "")}?id=${related.id}`}
                >
                  {related.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ArticlePage;
