import React from "react";
import { useParams } from "react-router-dom";
import articles from "../articles"; // Ensure this is correctly imported

function ArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <h2 className="text-center my-5">Article not found</h2>;
  }

  return (
    <div id="articleCard" className={`article article${article.id} container`}>
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

            {/* References */}
            {article.references && (
              <>
                <h4 className="text-secondary">References</h4>
                <p className="details articleDetails d-flex justify-content-center my-5 text-secondary">
                  {article.references}
                </p>
              </>
            )}

            {/* Author */}
            <h5 className="details articleDetails">{article.author}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
