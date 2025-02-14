import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
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
  }, [id]);

  const fullImageUrl = article.frontImage.startsWith("http")
    ? article.frontImage
    : `https://cometowl.com${article.frontImage}`;

  if (!article) {
    return <h2 className="text-center my-5">Article not found</h2>;
  }

  return (
    <div id="articleCard" className={`article article${article.id} container`}>
      <Helmet>
        <title>{article.title} | CometOwl</title>
        <meta name="description" content={article.briefing} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.briefing} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:url"
          content={`https://cometowl.com/articles/${article.id}`}
        />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.briefing} />
        <meta name="twitter:image" content={fullImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="nav-separator"></div>
      <div className="row justify-content-center">
        <div className="col-12 col-xl-8">
          <div className="article-content d-flex flex-column justify-content-center align-items-center">
            <h1 className="name articleName text-center my-4">
              {article.title}
            </h1>
            {article.frontImage && (
              <div id="frontImage" className="image-container my-3">
                <img
                  src={article.frontImage}
                  alt={article.title}
                  className="article-image"
                />
              </div>
            )}
            <h5 className="details articleDetails my-5">
              {article.introduction}
            </h5>
            <h5 className="details articleDetails my-5">{article.textOne}</h5>
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
            <h5 className="details articleDetails my-5">{article.textFour}</h5>
            {article.conclusionImage && (
              <div className="details articleDetails d-flex justify-content-center my-5">
                <img
                  src={article.conclusionImage}
                  alt="Conclusion"
                  className="conclusionImage"
                />
              </div>
            )}
            <h5 className="details articleDetails d-flex justify-content-center my-5">
              {article.conclusion}
            </h5>
            <h5 className="details articleDetails mb-4">{article.author}</h5>
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
            .filter((a) => a.id !== article.id)
            .slice(0, 3)
            .map((related) => (
              <li key={related.id}>
                <Link
                  className="relatedArticleLink text-decoration-none"
                  to={`/articles/${related.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]/g, "")}?id=${related.id}`}
                >
                  {related.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ArticlePage;
