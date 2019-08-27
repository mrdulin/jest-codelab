class Component {
  private props;
  constructor(props) {
    this.props = props;
  }
  public componentDidMount() {
    this.props.client
      .items()
      .type('client')
      .toObservable()
      .subscribe(response => {
        this.setState(response);
      });
  }
  private setState(state) {
    console.log(state);
  }
}

export { Component };
