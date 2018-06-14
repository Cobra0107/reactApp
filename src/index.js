// Import React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Import Component.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


// Youtube API Key
const API_KEY = 'AIzaSyCJMzkkK5YxxYI7ZzdDEO73dE63-Wa-nD0';

// New component for html generations.
// Naming follow the ES6 standard.
// ES5 standard is something like const App = function(){}
// ES6 function.
// const App = () => {
//   return (
//     <div className='first-class'>
//       <SearchBar />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('animals');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return(
      <div className='first-class'>
        <SearchBar onSearchChange={term => this.videoSearch(term)}/>
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.react-container'));
