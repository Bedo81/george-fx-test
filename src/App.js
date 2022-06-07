import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import SearchBar from './components/SearchBar';
import filterCurrencies from './filterCurrencies';
import AppHeader from './components/AppHeader';
import useApi from './useApi';
import useSticky from './useSticky';
import SearchResults from './components/SearchResults';
import ResultsMessage from './components/ResultsMessage';

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const [ searchQuery, setSearchQuery ] = useState(query || '');
  const { isSticky, element } = useSticky();
  const { data } = useApi();

  const filteredCurrencies = filterCurrencies(data, searchQuery);

  return (
    <Router>
          <AppHeader />
          <SearchBar
            sticky={isSticky}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            element={element}
          />
          <ResultsMessage
            message={`Showing ${filteredCurrencies.length} results`}
          />
          <SearchResults results={filteredCurrencies} />
    </Router>
  );
}

export default App;
