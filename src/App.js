import React, { useState } from 'react';
import ArticlesList from './components/ArticlesList';
import NewArticleForm from './components/NewArticleForm';
import Select from './components/UI/select/Select';
import articlesList1 from './data/articlesList1';
import './styles/App.css';

function App() {
  const [articles, setArticles] = useState(articlesList1);
  const [selectedSort, setSelectedSort] = useState('');

  const addArticle = function (newArticle) {
    setArticles([...articles, newArticle]);
  };

  const removeArticle = function (article) {
    setArticles(articles.filter((item) => item.id !== article.id));
  };

  const sortArticles = function (sort) {
    setSelectedSort(sort);
    setArticles([...articles].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <NewArticleForm add={addArticle} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <Select
          value={selectedSort}
          onChange={sortArticles}
          defaultOption="sort by"
          options={[
            { value: 'title', name: 'title' },
            { value: 'body', name: 'text' },
          ]}
        />
      </div>
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
