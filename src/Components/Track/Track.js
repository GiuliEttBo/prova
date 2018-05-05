import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css';

class Track extends React.Component{
  constructor(props){
    super(props);
    this.addTrack.bind(this);
    this.renderAction.bind(this);
    this.removeTrack.bind(this);
  }
  addTrack(){
    this.props.onAdd(this.props.track);
  }
  removeTrack(){
    this.props.onRemove(this.props.track);
  }
  renderAction() {
    if(this.props.isRemoval){
      return <a onClick={this.removeTrack}>'-'</a>;
    } else {
      return <a onClick={this.addTrack}>'+'</a>;
    }
    this.className="Track-action";
  }
  render(){
    return (
      <div className="Track">
  <div className="Track-information">
    <h3>{this.props.name}</h3>
    <p>{this.props.artist}{this.props.album}</p>
  </div>
  <a className="Track-action" onClick={this.addTrack()}>{this.renderAction()}</a>
</div>
    );
  }
}
export default Track;
