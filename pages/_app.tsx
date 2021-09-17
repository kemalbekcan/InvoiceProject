import "../styles/index.css";
import App from "next/app";
import React from "react";
import store from "../store/store";
import { Provider } from "react-redux";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default MyApp;
