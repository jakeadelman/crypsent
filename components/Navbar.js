import React from "react";
import { Nav, NavLink, NavItem } from "reactstrap";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="/" active>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">post</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
