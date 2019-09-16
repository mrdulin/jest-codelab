import React from 'react';

interface ISearchComponentOwnProps {
  jobs: { content: any };
}

interface ISearchComponentState {
  search: string;
}

export class SearchComponent extends React.Component<ISearchComponentOwnProps, ISearchComponentState> {
  constructor(props: ISearchComponentOwnProps) {
    super(props);
    this.state = {
      search: ''
    };
  }

  public render() {
    const {
      jobs: { content }
    } = this.props;
    const { search } = this.state;
    const filteredList = content.filter(
      job =>
        (job.jdName && job.jdName.toLowerCase().includes(search.toLowerCase())) ||
        (job.technology && job.technology.toLowerCase().includes(search.toLowerCase()))
    );

    return (
      <div>
        <input
          type="text"
          id="searchJob"
          className="form-control-sm border-0 flex-grow-1"
          value={this.state.search}
          placeholder="Technology / Job title"
          onChange={this.onInputChnage}
        />
        <i className="fa fa-search search-job"></i>

        <ul className="job-list">
          {filteredList.map(job => {
            return (
              <li key={job.id}>
                <span>jdName: {job.jdName}</span>
                <span>technology: {job.technology}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  private onInputChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  }
}
