import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Article from './Article';

const ArticlesList = function ({ articles, title, remove }) {
  if (!articles.length) {
    return <h1 style={{ textAlign: 'center' }}>No articles for today</h1>;
  }

  return (
    <div className="aricles-list">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {articles.map((article, index) => (
          <CSSTransition key={article.id} timeout={500} classNames="article">
            <Article remove={remove} number={index + 1} data={article} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ArticlesList;
