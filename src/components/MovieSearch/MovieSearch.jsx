import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
// import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const DEBOUNCE_TIME = 250;

const MovieSearch = ({ query }) => {
  // , onSearch
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

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   if (searchQuery.trim() || query.trim() === '') {
  //     return toast.error('Write search movie');
  //   }
  //   onSearch(searchQuery);
  //   setSearchQuery('');
  // };
  console.log(query);
  return (
    <>
      <form
      // onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.currentTarget.value)}
          autoComplete="off"
          autoFocus
          placeholder="Write movie"
        />
      </form>
    </>
  );
};

MovieSearch.propTypes = {
  query: PropTypes.string.isRequired,
};
export default MovieSearch;
