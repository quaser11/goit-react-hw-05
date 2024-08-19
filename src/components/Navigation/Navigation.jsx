import {Link, Nav, Header} from "./Navigation.styled.js";
import {Outlet} from "react-router-dom";

const Navigation = () => {
    return <>
        <Header>
            <Nav>
                <Link to='/'>Home</Link>
                <Link to='movies'>Movies</Link>
            </Nav>
        </Header>
        <Outlet />
    </>
}

export default Navigation;