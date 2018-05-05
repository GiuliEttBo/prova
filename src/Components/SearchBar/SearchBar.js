import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.handleTermChange.bind(this);
    this.search.bind(this);
  }
  handleTermChange(event){
    debugger;
    if(!event){
      return;
    } else {
        this.search(event.target.value);
    }
  }
  search(term){
    this.props.onSearch(term);
  }

  render(){
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onSearch={this.handleTermChange}/>
        <a>SEARCH</a>
      </div>

    );
  }
}
export default SearchBar;
