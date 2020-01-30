import React, { Component } from "react";

// route 的高阶组件
class RouteComponent extends Component {
  componentWillMount() {
    //   在这里写路由拦截的代码。。。
    let path = this.props.path;
    let auth = this.props.auth;

    if (auth && !localStorage["token"]) {
      this.props.history.replace("/login");
    }
  }
  render() {
    let Component = this.props.component;
    return <Component {...this.props} />;
  }
}
export default RouteComponent;
