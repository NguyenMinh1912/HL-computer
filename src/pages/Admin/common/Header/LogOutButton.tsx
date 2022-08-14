import React, {FunctionComponent} from "react";
import {LogoutOutlined} from "@ant-design/icons";
import authenticateService from "../../../../core/services/AuthenticateService";
import {useNavigate} from "react-router-dom";

const LogOutButton: FunctionComponent = () => {

    const navigate = useNavigate();

    const logoutHandle = async () => {
        console.log("logout")
        await authenticateService.logout();
        navigate('/login', {replace:true})
    }

    return <LogoutOutlined onClick={logoutHandle}/>;
}

export {LogOutButton};