import styled from '@emotion/styled'
import {NavLink} from "react-router-dom";

export const Link = styled(NavLink)`
    text-decoration: none;
    color:black;
    
        &.active{
            color:orange;
        }
`

export const Nav = styled.nav`
    display: flex;
    gap:10px;
`

export const Header = styled.header`
    padding:10px;
    border-bottom:1px solid black;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 1px;
`