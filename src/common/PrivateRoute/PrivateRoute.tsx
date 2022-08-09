import {FunctionComponent, ReactElement} from "react";
import {Navigate, Outlet} from "react-router-dom";
import authenticateService from "../../core/services/AuthenticateService";
import Login from "../../pages/Login/Login";

type PrivateRouteProps = {
    isGuard: boolean;
    children: ReactElement
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({isGuard, children}) => {
    // let isLogin = authenticateService.isLogin();
    return isGuard ? children : <Navigate to="/login"/>
}

export {PrivateRoute};