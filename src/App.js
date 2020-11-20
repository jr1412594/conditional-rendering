import { Component } from 'react'

import './App.css';

const TvShowsURL = "http://api.tvmaze.com/shows"

class App extends Component {

  state = {
    tvShows: []
  }
  
  getTvShows = () => {
    fetch(TvShowsURL)
      .then(response => response.json())
      .then(tvShows => this.setState({ tvShows}))
  }
  
  render(){
    return (
      <div className="App">
        <h1>Tv Shows !</h1>
        <button onClick={this.getTvShows}>Get Shows</button>
      </div>
    );
  }
}

export default App;
