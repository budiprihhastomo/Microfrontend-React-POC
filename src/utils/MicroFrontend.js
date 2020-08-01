import React, { Component } from "react";
import fetch from "axios";

export default class MicroFrontend extends Component {
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `microfrontend-script-${name}`;

    if (document.getElementById(scriptId)) return this.renderComponent();

    return fetch.get(`${host}/asset-manifest.json`).then(({ data }) => {
      const script = document.createElement("script");
      script.id = scriptId;
      script.crossOrign = "";
      script.src = `${host}${data["files"]["main.js"]}`;
      script.onload = this.renderComponent;
      document.head.appendChild(script);
    });
  }

  componentWillUnmount() {
    const { name, window } = this.props;
    window[`unmount`] && window[`unmount`](`${name}-container`);
  }

  renderComponent = () => {
    const { name, window } = this.props;
    window[`render`] && window[`render`](`${name}-container`, this.props);
  };

  render() {
    return <div id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  window,
  document,
};
