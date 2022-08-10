import styled from "styled-components"
import clock from '../../../../../assets/img/clock.svg'
import {Link} from 'react-router-dom'

export const Post = styled.li`
    max-width: 735px;
    width: 100%;
    padding-bottom: 16px;
    flex-grow: 1;
    border-bottom: 1px solid #DFDFDF;
    position: relative;
    list-style: none;
    &:not(:last-child) {
        margin-bottom: 46px;
    }
`
export const PostLink = styled(Link)` 
    &::before {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
`
export const PostHeader = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`
export const PostDate = styled.p` 
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #777777;
    padding: 0;
    margin: 0;
`
export const PostCategory = styled.p` 
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #777777;
    padding: 0;
    margin: 0;
`
export const PostDesc = styled.p` 
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
    max-width: 544px;
    width: 100%;
    margin-right: 190px;
    @media (max-width:750px) {
        margin-right: 100px;
    }
    @media (max-width:470px) {
        margin-right: 0px;
    }
`
export const PostSeen = styled.p` 
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #777777;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: start;
    &::before {
        content: url(${clock});
        width: 17px;
        height: 17px;
        display: block;
        margin-right: 11px;
    }
`

export const PostInfoWrapper = styled.div` 
    display: flex;
    align-items: center;
    justify-content: start;
`
export const PostDeleteBtn = styled.button` 
    padding: 3px;
    margin: 0;
    margin-left: 15px;
    background-color: transparent;
    color: #777777;
    border: none;
    z-index: 1000;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`