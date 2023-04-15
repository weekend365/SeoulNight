import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: any;
}

const Layout: FC<Props> = ({ children, ...props }) => (
  <>
    <Header />
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;
