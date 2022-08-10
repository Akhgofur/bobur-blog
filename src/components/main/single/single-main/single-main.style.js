import styled from "styled-components"
import shapaloq from '../../../../assets/img/shapaloq.svg'
import {Link} from 'react-router-dom'
import edit from '../../../../assets/img/edit-btn.svg'

export const SingleMainWrapper = styled.div` 
    padding-top: 80px;
    position: relative;
`
export const SingleMainContent = styled.div` 
    max-width: 733px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`
export const PostUpBtn = styled.button` 
    padding: 0;
    margin: 0;
    border: none;
    position: absolute;
    background-color: transparent;
    top: 83px;
    left: 132px;
    &::before {
        display: block;
        content: url(${shapaloq});
        width: 18px;
        height: 19px;
        margin-bottom: 8px;
    }
`
export const SingleMainHeading = styled.p` 
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin: 0;
    padding: 0;
    margin-bottom: 24px;
    color: #777777;
`
export const SingleMainTitle = styled.p` 
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin: 0;
    padding: 0;
    margin-bottom: 24px;
`
export const TimeWrapper = styled.div` 
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 45px;
`
export const PostImg = styled.img` 
    max-width: 733px;
    height: auto;
    margin-bottom: 50px;
    background-color: #fafafa;
    display: block;
    background: url(jason-leung-f_VYtQiH6Mg-unsplash.jpg);
    border-radius: 7px;
`
export const PostBody = styled.p` 
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    margin: 0;
    padding: 0;
    margin-bottom: 80px;
`
export const PostsListWrapper = styled.div` 
    display: block;
    margin-bottom: 90px;
`
export const SingleMainHeader = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const PostEditModalLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    margin-bottom: 10px;
    width: 22px;
    height: 22px;
    background-image: url(${edit});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`