import styled from "styled-components"

export const AboutMeWrapper = styled.div`
    max-width: 328px;
    width: 100%;
    margin-right: auto;
    @media (max-width: 900px) {
        margin-top: 120px;
        margin-bottom: 100px;
    }
`
export const AboutMeHeading = styled.p` 
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin: 0;
    padding: 0;
    margin-bottom: 36px;
`
export const AboutMeDesc = styled.p` 
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    padding: 0;
    margin-bottom: 28px;
`
export const ExploreMeBtn = styled.button` 
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: start;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    margin-bottom: 50px;
    &::after {
        display: block;
        content: '>';
        width: 20px;
        height: 20px;
        padding: 3px;
        background-color: #F4F4F4;
        border-radius: 3px;
        margin-left: 16px;
    }
`
export const SocialLinks = styled.ul` 
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
`
export const SocialLinkWrapper = styled.li` 
    &:not(:last-child) {
        margin-right: 24px;
    }
`
export const SocialLink = styled.a` 
    text-decoration: none;
`
export const SocialLinkImg = styled.img` 
    display: block;
`