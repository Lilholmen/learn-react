import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const ArticleFilter = function ({ filter, setFilter }) {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultOption="sort by"
        options={[
          { value: 'title', name: 'title' },
          { value: 'body', name: 'text' },
        ]}
      />
    </div>
  );
};

export default ArticleFilter;
