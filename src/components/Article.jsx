import React from 'react';
import Button from './UI/button/Button';

const Article = function (props) {
  return (
    <div className="article">
      <div className="article__content">
        <h1>
          {props.number}. {props.data.title}
        </h1>
        <div>{props.data.body}</div>
      </div>
      <div className="article__buttons">
        <Button onClick={() => props.remove(props.data)}>Delete</Button>
      </div>
    </div>
  );
};

export default Article;
