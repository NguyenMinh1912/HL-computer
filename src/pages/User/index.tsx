import { FunctionComponent } from "react";
import {Head} from "./common/header/Head";
import {Container} from "./Container";
import {Footer} from "./common/footer";

const User: FunctionComponent = () => {
  return <>
    <Head/>
    <Container />
    <Footer />
  </>;
};


export {User};
