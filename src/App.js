import { Component } from 'react'

import './App.css';
import TvShowsSection from './TvShowsSection';

const TvShowsURL = "http://api.tvmaze.com/shows"

class App extends Component {

  state = {
    tvShows: [],
    isClicked: false
  }

  componentDidMount(){
    this.getTvShows()

  }
  
  getTvShows = () => {
    fetch(TvShowsURL)
      .then(response => response.json())
      .then(tvShows => this.setState({ tvShows}))
  }

  handleClick = () => {
    this.setState({isClicked: true})
  }

  render(){
    return (
      <div className="App">
        <h1>Tv Shows !</h1>
        { this.state.isClicked 
        ? <TvShowsSection tvShows={this.state.tvShows} />
        : <button onClick={this.handleClick}>Get Shows</button>
        }
      </div>
    );
  }
}

export default App;
