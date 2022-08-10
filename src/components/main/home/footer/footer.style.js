import styled from "styled-components"

export const Footer = styled.footer`
    padding-top: 40px;
    padding-bottom: 45px;
    background-color: #000;
`
export const FooterInner = styled.div` 
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width:850px) {
        flex-direction: column;
    }
`
export const FooterLogoImg = styled.img`
 width: 182px;
 height: 70px;
 @media (max-width:850px) {
        margin-bottom: 40px;
    }
    @media (max-width:590px) {
       height: 33px;
       width: 100px;
    }
`