import styled from "styled-components"

export const PostsWrapper = styled.div` 
    margin-left: 20px;
    max-width: 843px;
    width: 100%;
    margin-bottom: 30px;
    @media (max-width:900px) {
        margin-left: 0;
    }
`

export const PostsListHeading = styled.p` 
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    padding: 0;
    margin: 0;
    margin-bottom: 58px;
`
export const Posts = styled.ul` 
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 843px;
    width: 100%;
    padding-right: 107px;
    @media (max-width: 1250px) {
        padding-right: 0;
    }
`