import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Link from "next/link";

const PostLink = props => (
  <Link href={`/searchterm?term=${props.searchterm}&by=${props.by}`}>
    <PaginationLink>{props.by}</PaginationLink>
  </Link>
);

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: this.props.searchterm, by: this.props.by };
  }

  render() {
    return (
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PostLink searchterm={this.state.term} by="top" />
        </PaginationItem>
        <PaginationItem>
          <PostLink searchterm={this.state.term} by="latest" />
        </PaginationItem>
      </Pagination>
    );
  }
}
