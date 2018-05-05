import React from 'react';
import ReactDOM from 'react-dom';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component{
  render(){
    return (

        <div className="TrackList">
        {this.props.tracks.map(track =>
        <Track  onRemove={this.props.onRemove}
        isRemoval={this.props.isRemoval} track={track}
        key={track.id} onAdd={this.props.onAdd}
        name={track.name} artist={track.artist}
        album={track.album}/>)}
        </div>
      );
}
}
export default TrackList;
