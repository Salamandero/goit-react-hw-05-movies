import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import toast from 'react-hot-toast';

const DEBOUNCE_TIME = 250;

const MovieSearch = ({ query, onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(query);
  const debounceSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

  useEffect(() => {
    if (!debounceSearchQuery) {
      searchParams.delete('query');
      setSearchParams(searchParams);
      return;
    }
    setSearchParams({ query: debounceSearchQuery });
  }, [setSearchParams, searchParams, debounceSearchQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() && query === '') {
      return toast.error('Write search movie');
    }
    onSearch(searchQuery);
    setSearchQuery('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.currentTarget.value)}
          autoComplete="off"
          autoFocus
          placeholder="Write movie"
        />
        <button type="submit">
          <label>Search</label>
        </button>
      </form>
    </>
  );
};

export default MovieSearch;
