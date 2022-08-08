import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { User } from "./pages/User";
import { Admin } from "./pages/Admin";
import { NotFound } from "./common/NotFound";
import { Products } from "./pages/Admin/components/Products";
import { Categories } from "./pages/Admin/components/Categories";

function App() {
  return (
    <div className="App">
      {/* <Link to={''}>
        User page
      </Link>
      <Link to={'admin'}>
        Admin page
      </Link> */}
        <Routes>
          <Route path="" element={<User />}>
            {/* user childs route here */}
          </Route>
          <Route path="admin" element={<Admin />}>
            {/* admin childs route here */}
            <Route path="products" element={<Products/>}>
              
            </Route>
            <Route path="categories" element={<Categories/>}></Route>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
