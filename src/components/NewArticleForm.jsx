import React, { useState } from 'react';
import Button from './UI/button/Button';
import Input from './UI/input/Input';

const NewArticleForm = function ({ add }) {
  const [articleInput, setArticleInput] = useState({ title: '', body: '' });

  const addNewArticle = (e) => {
    e.preventDefault();

    const newArticle = {
      ...articleInput,
      id: Date.now(),
    };

    add(newArticle);
    setArticleInput({ title: '', body: '' });
  };

  return (
    <form>
      <Input
        type="text"
        placeholder="Article title"
        value={articleInput.title}
        onChange={(e) =>
          setArticleInput({ ...articleInput, title: e.target.value })
        }
      />
      <Input
        type="text"
        placeholder="Article text"
        value={articleInput.body}
        onChange={(e) =>
          setArticleInput({ ...articleInput, body: e.target.value })
        }
      />
      <Button onClick={addNewArticle}>Create article</Button>
    </form>
  );
};

export default NewArticleForm;
