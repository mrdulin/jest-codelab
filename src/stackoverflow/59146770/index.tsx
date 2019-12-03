import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

export class MyComponent extends React.Component {
  componentDidMount() {
    axios.defaults.headers.common.Authorization = cookies.get("token").value; //12492525
    console.log(axios.defaults.headers.common.Authorization);
  }
  render() {
    return null;
  }
}
