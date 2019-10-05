import React, { Component } from 'react';
import console = require('console');

interface ITodoSearchProps {
  onSearch(input): any;
  onCheckbox(value): any;
}

class TodoSearch extends Component<ITodoSearchProps> {
  private searchInput: HTMLInputElement | null = null;
  constructor(props: ITodoSearchProps) {
    super(props);
  }
  public handleSearch = () => {
    if (this.searchInput) {
      const searchInput = this.searchInput.value;
      console.log('searchInput: ', searchInput);
      // passed down from parent component
      this.props.onSearch(searchInput);
    }
  }

  public handleCheckbox = e => {
    const showCompleted = e.target.checked;
    // passed down from parent component
    this.props.onCheckbox(showCompleted);
  }

  public render() {
    return (
      <form>
        <input
          type="search"
          className="todoSearchInput"
          placeholder="Search"
          onChange={this.handleSearch}
          ref={input => (this.searchInput = input)}
        />
      </form>
    );
  }
}

export default TodoSearch;
