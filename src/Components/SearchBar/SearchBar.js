import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }
  handleTermChange(event){
    if(!event){
      //do nothing
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
        <a onClick={this.search}>SEARCH</a>
      </div>

    );
  }
}
export default SearchBar;
