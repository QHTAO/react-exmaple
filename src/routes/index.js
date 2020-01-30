import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./config";
import RouteComponent from "./RouteComponent";
import { connect } from "react-redux";
import { Toptips, Toast } from "react-weui";

class AppRouter extends Component {
  componentWillMount() {
    // APP初始化->读取本地的存储状态
    try {
      let context = JSON.parse(localStorage["context"]);
      this.props.setContext(context);
    } catch (error) {}
  }
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                exact
                key={index}
                path={route.path}
                // 使用高阶组件来封装每个页面路由
                render={props => <RouteComponent {...route} {...props} />}
              />
            );
          })}
        </Switch>
        <Toast icon="loading" show={this.props.isLoading}>
          Loading...
        </Toast>
        <Toptips type={this.props.toptips.type} show={this.props.toptips.show}>
          {this.props.toptips.text}
        </Toptips>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.app.isLoading,
    toptips: state.app.toptips || {}
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
