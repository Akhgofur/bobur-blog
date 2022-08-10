import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkWrapper = styled.div` 
    display: flex;
    align-items: center;
    justify-content: start;
    @media (max-width: 650px) {
        display: none;
    }

`

export const HeaderLink = styled(NavLink)` 
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    padding: 10px 0;
    &:not(:last-child) {
        margin-right: 30px;
    }
`