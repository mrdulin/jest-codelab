import React, { Component } from 'react';
import { ExternalLandingPageUtil } from './ExternalLandingPageUtil';
import { ActivationUI } from './ActivationUI';

export class ActivationSF extends Component<any, any> {
  public className: string;
  constructor(props) {
    super(props);
    this.className = 'ActivationSF.js';
    this.state = {
      messages: null
    };
  }

  render() {
    return <ActivationUI context={this.props.context} messages={this.state.messages} />;
  }

  componentWillMount() {
    let context = this.props.context;

    if (!context.userInfo) {
      window.location.replace('/identify');
    }

    let externalLP = ExternalLandingPageUtil.getExternalLandingPageUrl(context);
    if (externalLP) {
      window.location.replace(`${externalLP}`);
      return;
    }

    if (context.userInfo) {
      window.location.replace('/store');
    }
  }

  componentDidMount() {
    document.body.classList.add('sdp');
  }
}
