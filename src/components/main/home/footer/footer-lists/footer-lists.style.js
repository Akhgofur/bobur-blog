import styled from "styled-components"

export const FooterListWrapper = styled.div`
    max-width: 560px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width:850px) {
        max-width: 100%;
    }
    @media (max-width:590px) {
        flex-direction: column;
    }

`
export const FooterList = styled.ul` 
    margin: 0;
    padding: 0;
    list-style: none;
    margin-bottom: 30px;

`
export const FooterListHeading = styled.p` 
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    margin: 0;
    margin-bottom: 14px;
    color: #FFFFFF;

`
export const FooterItem = styled.li` 
    &:not(:last-child) {
        margin-bottom: 15px;
    }
`
export const FooterItemLink = styled.a` 
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-decoration: none;
    color: #FFFFFF;
`
