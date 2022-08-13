import React from "react";
import "./App.css";
import {Route, Router, Routes} from "react-router-dom";
import {Admin} from "./pages/Admin";
import {NotFound} from "./common/NotFound";
import {Products} from "./pages/Admin/components/Products";
import {Categories} from "./pages/Admin/components/Categories";
import {DashBoard} from "./pages/Admin/components/DashBoard";
import authenticateService from "./core/services/AuthenticateService";
import Login from "./pages/Login/Login";
import {PrivateRoute} from "./common/PrivateRoute/PrivateRoute";

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
                {/*<Route path="" element={<User />}>*/}
                {/*  /!* user childs route here *!/*/}
                {/*</Route>*/}
                <Route path="" element={<PrivateRoute isGuard={authenticateService.isAdmin()} >
                {/*<Route path="" element={<PrivateRoute isGuard={true} >*/}
                    <Admin/>
                </PrivateRoute>}>
                    {/* admin childs route here */}
                    <Route path="products" element={<Products/>}></Route>
                    <Route path="categories" element={<Categories/>}></Route>
                    <Route path="dashboard" element={<DashBoard/>}></Route>
                </Route>
                <Route path="login" element={<Login/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
