import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import articles from "../articles";

function ArticlePage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  // Find the article by ID
  const article = articles.find((a) => a.id === parseInt(id));

  useEffect(() => {
    const element = document.querySelector(".nav-separator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [id]);

  if (!article) {
    return <h2 className="text-center my-5">Article not found</h2>;
  }

  // Ensure absolute URL for images
  const absoluteImageUrl = article.frontImage.startsWith("http")
    ? article.frontImage
    : `https://www.cometowl.com${article.frontImage}`;

  return (
    <div id="articleCard" className={`article article${article.id} container`}>
      <Helmet>
        {/* Meta Tags for Social Media */}
        <title>{article.title} | CometOwl</title>
        <meta name="description" content={article.briefing} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.briefing} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta
          property="og:url"
          content={`https://www.cometowl.com/articles/${article.id}`}
        />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.briefing} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="nav-separator"></div>
      <div className="row justify-content-center">
        <div className="col-12 col-xl-8">
          <div className="article-content d-flex flex-column justify-content-center align-items-center">
            <h1 className="name articleName text-center my-4">
              {article.title}
            </h1>

            {/* Front Image */}
            {article.frontImage && (
              <div id="frontImage" className="image-container my-3">
                <img
                  src={absoluteImageUrl}
                  alt={article.title}
                  className="article-image"
                />
              </div>
            )}

            {/* Briefing */}
            <h5 className="details articleDetails my-5">
              {article.introduction}
            </h5>

            {/* Sections of the article */}
            <h5 className="details articleDetails my-5">{article.textOne}</h5>
            {article.illustrationOne && (
              <img
                src={article.illustrationOne}
                alt="Illustration One"
                className="illustrationOne"
              />
            )}
            <h5 className="details articleDetails my-5">{article.textTwo}</h5>
            {article.illustrationTwo && (
              <img
                src={article.illustrationTwo}
                alt="Illustration Two"
                className="illustrationTwo"
              />
            )}
            <h5 className="details articleDetails my-5">{article.textThree}</h5>
            {article.conclusionImage && (
              <img
                src={article.conclusionImage}
                alt="Conclusion"
                className="conclusionImage"
              />
            )}
            <h5 className="details articleDetails my-5">
              {article.conclusion}
            </h5>
            <h5 className="details articleDetails mb-4">{article.author}</h5>
          </div>
        </div>
      </div>

      <div className="text-decoration-none">
        <h3>Related Articles</h3>
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
