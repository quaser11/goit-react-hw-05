import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
    display: flex;
    gap:20px;
`

export const MovieDetail = styled.div`

`

export const Nav = styled.div`
    padding:10px;
    border-top:1px solid black;
    border-bottom:1px solid black;
`

export const Link = styled(NavLink)`
    text-decoration: none;
    
    &.active{
       color:orange;
    }
`