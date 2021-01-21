import React, { Children } from 'react'

// reference of using `Children`, and 'props.children'
export default function ({ children }) {
  const buttons = Children.map(children, (child, index) => (
    <button key={`child-${index}`}>{child}</button>
  ))
  return (
    <div>
      <h1>Total Children: {Children.count(children)} </h1>
      {buttons}
    </div>
  )
}


// https://github.com/cassiozen/ReactCasts/blob/master/episode1/src/components/HOC/LoadingHOC.js
const LoadingHOC = (loadingProp) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    componentDidMount() {
      this.startTimer = Date.now();
    }

    componentWillUpdate(nextProps) {
      if (!isEmpty(nextProps[loadingProp])) {
        this.endTimer = Date.now();
      }
    }

    render() {
      const myProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2),
      };

      return isEmpty(this.props[loadingProp]) ? <div className="loader" /> : <WrappedComponent {...this.props} {...myProps} />;
    }
  }
}