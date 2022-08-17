import {FunctionComponent, ReactElement} from "react";
import './GlobalStyle.scss';

type Props = {
    children: ReactElement
}

const GolbalStyle: FunctionComponent<Props> = ({children}) => {
    return <>
        {children}
    </>
}
export {GolbalStyle};