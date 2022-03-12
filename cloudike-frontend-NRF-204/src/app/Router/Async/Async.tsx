import React from 'react';

import Loader from './Loader';

interface IState {
  component: React.FC | null;
}

const sleep = (m: number) => new Promise((r) => setTimeout(r, m));

const asyncComponent = (importComponent: any) => {
  class AsyncComponent extends React.Component<unknown, IState> {
    constructor(props: any) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      await sleep(150);

      const { default: component } = await importComponent();

      this.setState({
        component,
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <Loader />;
    }
  }

  return AsyncComponent;
};

export default asyncComponent;
