// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Import Component.
import SearchBar from './components/search_bar';

// Youtube API Key
const API_KEY = 'AIzaSyCJMzkkK5YxxYI7ZzdDEO73dE63-Wa-nD0';

// New component for html generations.
// Naming follow the ES6 standard.
// ES5 standard is something like const App = function(){}
const App = () => {
  return (
    <div className='first-class'>
      <SearchBar />
    </div>
  );
}


// Get the generated HTML and put it on page (in DOM).
ReactDOM.render(<App />, document.querySelector('.react-container'));
