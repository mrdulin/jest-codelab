import React, { PureComponent } from 'react';

class SearchFlightBuilder extends PureComponent {
  scrollRef: any = React.createRef();

  state = {
    loading: true,
    error: false,
    filteredList: [],
    pageIndex: 0,
    scrollCalled: false
  };

  handleScroll = event => {
    // make sure scroll should be called once
    if (
      this.scrollRef.current.scrollTop + this.scrollRef.current.clientHeight >= this.scrollRef.current.scrollHeight &&
      !this.state.scrollCalled
    ) {
      this.setState({
        pageIndex: this.state.pageIndex + 1
      });
      this.setState({ scrollCalled: true });
    }
  };

  componentDidMount = () => {
    this.scrollRef.current.addEventListener('scroll', this.handleScroll);
  };

  removeScrollEvent = () => {
    this.scrollRef.current.removeEventListener('scroll', this.handleScroll);
  };

  render() {
    return (
      <div className="Search-flight-builder" ref={this.scrollRef}>
        <p>Hello</p>
      </div>
    );
  }
}

export default SearchFlightBuilder;
