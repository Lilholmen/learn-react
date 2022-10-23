import React from 'react';
import Article from './Article';

const ArticlesList = function ({ articles, title, remove }) {
  return (
    <div className="aricles-list">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {articles.map((article, index) => (
        <Article
          remove={remove}
          number={index + 1}
          data={article}
          key={article.id}
        />
      ))}
    </div>
  );
};

export default ArticlesList;
