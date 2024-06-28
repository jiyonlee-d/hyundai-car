import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="main">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
