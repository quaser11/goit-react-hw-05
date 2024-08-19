import {Link, Nav, Header} from "./Navigation.styled.js";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";

const Navigation = () => {
    return <>
        <Header>
            <Nav>
                <Link to='/'>Home</Link>
                <Link to='movies'>Movies</Link>
            </Nav>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </Suspense>
    </>
}

export default Navigation;