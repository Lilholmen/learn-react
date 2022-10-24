import React, { useMemo, useState } from 'react';
import ArticleFilter from './components/ArticleFilter';
import ArticlesList from './components/ArticlesList';
import NewArticleForm from './components/NewArticleForm';
import articlesList1 from './data/articlesList1';
import './styles/App.css';

function App() {
  const [articles, setArticles] = useState(articlesList1);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const addArticle = function (newArticle) {
    setArticles([...articles, newArticle]);
  };

  const removeArticle = function (article) {
    setArticles(articles.filter((item) => item.id !== article.id));
  };

  const sortedArticles = useMemo(() => {
    if (filter.sort) {
      return [...articles].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return articles;
  }, [filter.sort, articles]);

  const sortedArticlesWithSearch = useMemo(() => {
    return sortedArticles.filter((article) =>
      article.title
        .toLocaleLowerCase()
        .includes(filter.query.toLocaleLowerCase())
    );
  }, [filter.query, sortedArticles]);

  return (
    <div className="App">
      <NewArticleForm add={addArticle} />
      <hr style={{ margin: '15px 0' }} />
      <ArticleFilter filter={filter} setFilter={setFilter} />
      <ArticlesList
        remove={removeArticle}
        articles={sortedArticlesWithSearch}
        title="Articles List"
      />
    </div>
  );
}

export default App;
