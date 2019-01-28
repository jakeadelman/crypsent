import React from "react";
import Link from "next/link";
import Router from "next/router";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log("submitted bro", this.state.link);
    Router.push(this.state.link);
  }

  handleChange(event) {
    let link = "/searchterm?term=" + event.target.value + "&by=top";
    this.setState({ value: event.target.value, link: link });
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="enter searchterm"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
