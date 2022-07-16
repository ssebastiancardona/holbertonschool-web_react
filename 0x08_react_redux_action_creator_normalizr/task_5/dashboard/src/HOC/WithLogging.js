import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Hoc(HocComponent) {
  let componentName = '';
  if (HocComponent.name) {
    componentName = HocComponent.name
  } else {
    componentName = 'Component'
  }
  return class HOC extends Component {
    constructor(props) {
      super(props);
    }
    static propTypes = {
      displayName: PropTypes.string,
    };

    static defaultProps = {
      displayName: componentName,
    };

    componentDidMount() {
      console.log(`Component ${componentName} is mounted`)
    }
    componentWillUnmount() {
      console.log(`Component ${componentName} is going to unmount`)
    }
    render(){
      return (
        <HocComponent {...this.props}/>
      );
    }
  }
}

export default Hoc;
