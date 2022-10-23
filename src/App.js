import React, { useState } from 'react';
import ArticlesList from './components/ArticlesList';
import NewArticleForm from './components/NewArticleForm';
import articlesList1 from './data/articlesList1';
import './styles/App.css';

function App() {
  const [articles, setArticles] = useState(articlesList1);

  const addArticle = function (newArticle) {
    setArticles([...articles, newArticle]);
  };

  const removeArticle = function (article) {
    setArticles(articles.filter((item) => item.id !== article.id));
  };

  return (
    <div className="App">
      <NewArticleForm add={addArticle} />
      {articles.length !== 0 ? (
        <ArticlesList
          remove={removeArticle}
          articles={articles}
          title="Articles List"
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No articles for today</h1>
      )}
    </div>
  );
}

export default App;
