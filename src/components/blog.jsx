import React, { useState, useEffect } from "react";
import { Typography, Paper, styled } from "@material-ui/core";
import { headerHeight } from "../constants/constants";
import { mediumProfileUrl } from "../data/config";

const StyledArticleGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "20px",
  backgroundColor: "#36749e",
});

const StyledArticleItem = styled("div")({
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#f5f5f5",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const StyledBlogText = styled(Paper)({
  backgroundColor: "#2f5975",
  height: headerHeight,
  padding: "20px",
  display: "flex",
  color: 'white',
  alignItems: "center",
  justifyContent: "center",
});

const StyledBlogHeaderText = styled(Typography)({
});

const StyledArticleTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "bold",
  margin: "10px 0",
});

const StyledArticleDate = styled(Typography)({
  fontSize: "14px",
  color: "#555",
  marginBottom: "10px",
});

const StyledReadMoreLink = styled("a")({
  color: "#1976D2",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const mediumProfile = mediumProfileUrl

const MediumCard = ({ article }) => {
    return (
      <StyledArticleItem>
        <img
          src={article.thumbnail} // Add the URL to the image here
          alt={article.title}
          style={{ width: "100%", height: "auto" }}
        />
        <StyledArticleTitle variant="h5">{article.title}</StyledArticleTitle>
        <StyledArticleDate variant="body2" color="textSecondary">
          {new Date(article.pubDate).toLocaleDateString()}
        </StyledArticleDate>
        <StyledReadMoreLink
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </StyledReadMoreLink>
      </StyledArticleItem>
    );
};
const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(mediumProfile)
      .then((res) => res.json())
      .then((data) => setArticles(data.items))
      .catch((error) => console.error(error));
  }, []);

  if (!articles || articles.length === 0) {
    return (
      <div>
        <Typography variant="h5">Loading articles...</Typography>
      </div>
    );
  }

  return (
    <StyledArticleGrid>
      {articles.map((article, index) => (
        <div key={index} className="article-item" style={{ padding: '2rem' }}>
          <MediumCard article={article} />
        </div>
      ))}
    </StyledArticleGrid>
  );
};

const Blog = () => {
  return (
    <div id="blog">
      <StyledBlogText square>
        <StyledBlogHeaderText variant="h3">Blog</StyledBlogHeaderText>
      </StyledBlogText>
      <MediumArticles />
    </div>
  );
};

export default Blog;
