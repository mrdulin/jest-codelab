import React, { Component } from 'react';
import { api } from './api';

class XComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  public async componentDidMount() {
    console.log('componentDidMount');
    window.scrollTo(0, 0);
    try {
      // check if user has auto
      const { vehicles: auto } = await api.getVehicles();

      const items = auto.filter(car => car.active);

      if (items.length) {
        this.setActiveAuto(items);
      } else {
        const { name } = await api.getCurrentMoto();

        this.setState({
          name
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  public setActiveAuto(items) {
    //
  }

  public render() {
    return <div>58082922</div>;
  }
}

export default XComponent;
