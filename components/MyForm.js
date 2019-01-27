import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.meSubmit = this.meSubmit.bind(this);
  }

  meSubmit() {
    console.log("submitted bro");
  }

  render() {
    return (
      <div>
        <form onSubmit={meSubmit}>
          <input type="text" placeholder="enter searchter" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
