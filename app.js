"use strict";

const { Component, h, render } = window.preact;

class App extends Component {
  componentDidMount() {
    this.setState({ message: "Hello World!" });
  }
  render(props, state) {
    return h("div", { id: "app" }, h(Header, { message: state.message }));
  }
}

const Header = (props) => {
  return h(
    "header",
    null,
    h("h1", null, "feedod"),
    props.message && h("h4", null, props.message)
  );
};

render(h(App), document.body);