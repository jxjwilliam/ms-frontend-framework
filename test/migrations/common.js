import React, { Component } from "react";
import { isEmpty } from "../src/helpers/utils";

// https://www.youtube.com/watch?v=LTunyI2Oyzw
const LoaderHOC = propName => Comp => {
  return class extends Component {
    render() {
      return isEmpty(this.props[propName])
        ? <div className="loader" />
        : <Comp {...this.props} />;
    }
  }
}


// React.cloneElement(View, {table: collection});
// <View table={collection} />
const setHOCView = (Comp) => (collection) => class extends Component {
  render() {
    return <Comp table={collection} {...this.props} />
  }
}

export {
  LoaderHOC,
  setHOCView,
}
