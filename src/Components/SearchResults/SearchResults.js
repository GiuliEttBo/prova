import React from 'react';
import ReactDOM from 'react-dom';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component{
  render(){
    return (
      <div className="SearchResults" searchResults={this.props.searchResults}>
    <h2>Results</h2>
    <TrackList isRemoval="false" onAdd={this.props.onAdd} tracks={this.props.searchResults}/>
  </div>

    );
  }
}
export default SearchResults;
