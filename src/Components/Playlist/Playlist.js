import React from 'react';
import ReactDOM from 'react-dom';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.handleNameChange.bind(this);
  }
  handleNameChange(e){
    let changedName = e.target.value;
    this.props.onNameChange(changedName);
  }
  render(){
    return (
      <div className="Playlist">
  <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
  <TrackList onRemove={this.props.onRemove} isRemoval='true' tracks={this.props.playlistTracks} playlistName={this.props.playlistName}/>
  <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
</div>
    );
  }
}
export default Playlist;
