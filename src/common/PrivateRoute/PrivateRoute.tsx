import {FunctionComponent} from "react";
import {Navigate, Outlet} from "react-router-dom";
import authenticateService from "../../core/services/AuthenticateService";
import Login from "../../pages/Login/Login";

// @ts-ignore
const PrivateRoute: FunctionComponent = ({ auth: { isAuthenticated }, children }) => {
    let isLogin = authenticateService.isLogin();
    return isLogin ? children : <Navigate to="/login"/>
}

export {PrivateRoute};