import React, { PureComponent } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { SetFiltersValue } from './actionCreators';

interface ISearchFilterStateProps {
  searchKeyword: string;
}

interface ISearchFilterState {
  keyword: string;
}

type Props = ISearchFilterStateProps & DispatchProp;

class SearchFilter extends PureComponent<Props, ISearchFilterState> {
  constructor(props: Props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      keyword: props.searchKeyword
    };
  }

  public handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ keyword: e.target.value });
    this.props.dispatch(SetFiltersValue());
  }

  public render() {
    const { keyword } = this.state;
    return (
      <div className="search-w bp3-input-group">
        <span className="bp3-icon bp3-icon-search" />
        <input
          className="bp3-input"
          value={keyword}
          type="text"
          placeholder="Search input"
          dir="auto"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (_, ownParams) => {
  return { searchKeyword: '' };
};

export default connect(mapStateToProps)(SearchFilter);
