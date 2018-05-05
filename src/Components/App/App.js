import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

class App extends React.Component {
constructor(props){
super(props);
this.state = {
searchResults :[],
playlistName: 'New Playlist',
playlistTracks: []};
this.addTrack.bind(this);
this.removeTrack.bind(this);
this.updatePlaylistName.bind(this);
this.savePlaylist.bind(this);
this.search.bind(this);
}
addTrack(track){
  this.state.playlistTracks.find(savedTrack => {
    if (savedTrack.id === track.id) {
      return;
    } else {
  let updatedPlaylistTracks = this.state.playlistTracks.push(track);
  this.setState(
    {
      playlistTracks: updatedPlaylistTracks
    }
  );
}
});
}
removeTrack(track){
  let trackToRemove;
  this.state.playlistTracks.find(savedTrack => {
    if (savedTrack.id === track.id) {
      trackToRemove = savedTrack;
    }
    let updatedPlaylistTracks = this.state.playlistTracks.pop(track);
    this.setState(
      {
        playlistTracks: updatedPlaylistTracks
      }
    );
});
}
updatePlaylistName(name){
  this.setState({
    playlistName: name
  });
}
savePlaylist(){

  let trackURIs = this.state.playlistTracks.map(track => track.uri);
  Spotify.savePlaylist(this.state.playlistName, trackURIs);
  this.setState({
    searchResults: []
  });
}
search(search){
  Spotify.search(search).then(searchResults => this.setState({
    searchResults: searchResults
  }));
console.log(search);
}
  render() {
    return (
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
    <SearchBar onSearch={this.search}/>
      <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
