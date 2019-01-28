import { withRouter } from "next/router";
import MainLayout from "../layouts/MainLayout";
import MainDiv from "../components/MainDiv";
// import MainCard from "../components/MainCard";
import Pagination from "../components/Pagination";

const Content = withRouter(props => (
  <div>
    <Pagination
      searchterm={props.router.query.term}
      by={props.router.query.by}
    />
    <MainDiv searchterm={props.router.query.term} by={props.router.query.by} />
  </div>
));

const Page = props => (
  <MainLayout>
    <Content />
  </MainLayout>
);

export default Page;
