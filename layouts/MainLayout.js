import React from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Fonts from "./index/Fonts";
import "../index.css";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <div style={layoutStyle}>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
