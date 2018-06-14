import React, { Component } from 'react';

// Above line equals to.
// const component = React.Component

// ES6 Function Based Component
// const SearchBar = () => {
//   return <input />;
// };
////////////////////////////////

// ES6 Class baased controlled component.
class SearchBar extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = { term: 'animals' };
  }

  // Render method for class.
  render() {
    // Using the normal funciton call on event.
    // return <input onChange={this.handleInputChange} />;

    // Using arrow function OR ES6 for cleaner code.
    return (
      <div className='search-container'>
        <input
          className='search-bar react-search'
          value={ this.state.term }
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );

  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchChange(term);
  }

  // // Function to handle event of onChange.
  // handleInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
