import React, { FC } from "react";

import Footer from "./footer";
import Header from "./header";

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
