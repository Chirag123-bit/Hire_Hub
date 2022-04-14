import React, { Component } from "react";

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return <h1> Something went wrong </h1>;
    }
    return this.props.chuldren;
  }
}

export default ErrorBoundry;
