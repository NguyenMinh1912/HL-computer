import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";

const Admin: FunctionComponent = () => {
  return <div>
    <Header></Header>

    <Outlet/>

    <Footer></Footer>
  </div>;
};

export { Admin };
