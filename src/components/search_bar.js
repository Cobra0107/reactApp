import React, { component } from 'react';

// Above line equals to.
// const component = React.Component

// ES6 Function Based Component
// const SearchBar = () => {
//   return <input />;
// };
////////////////////////////////

// ES6 Class baased component.
class SearchBar extends Component{
  // Render method for class.
  render() {
    return <input />;
  }
}



export default SearchBar;
