import { Fragment } from "react";
import MainHeader from "./main-header";
import TopBar from "./top-bar";

function Layout(props) {
  return (
    <Fragment>
      <TopBar />
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}
export default Layout;
