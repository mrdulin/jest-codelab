import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContainer } from './FormContainer';
import { Input } from './Input';
import { Button } from './Button';

interface ISearchFormDispatchProps {
  fetchData(params: ISearchFormState): any;
}

type Props = ISearchFormDispatchProps;

interface ISearchFormState {
  search: string;
  [key: string]: string;
}

export class SearchForm extends Component<Props, ISearchFormState> {
  public static propTypes = {
    fetchData: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Sets the state of the search name
   * @param {Object} event
   */
  public handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  /**
   * Propagate the submit event
   * @param {Object} event
   */
  public handleSubmit = event => {
    event.preventDefault();
    this.props.fetchData(this.state);
  }

  public render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Input value={this.state.search} name="search" placeholder="Search for..." onChange={this.handleChange} />
        <Button variant="contained" color="primary">
          Buscar
        </Button>
      </FormContainer>
    );
  }
}
