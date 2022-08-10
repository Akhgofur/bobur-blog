import styled from "styled-components"
import searchIcon from '../../../../../assets/img/searchIcon.svg'

export const SearchForm = styled.form` 
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 876px) {
        margin-top: 20px;
        max-width: 500px;
        width: 100%;
    }
`
export const SearchInput = styled.input` 
    padding: 12px 14px;
    background: #F4F4F4;
    max-width: 216px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #474747;
    border: none;
    @media (max-width: 875px) {
        max-width: 500px;
        width: 100%;
    }

`
export const SearchBtn = styled.button` 
    width: 40px;
    height: 40px;
    background-color: #FFBA9D;
    border-radius: 3px;
    background-image: url(${searchIcon});
    background-position: center;
    background-repeat: no-repeat;
    border: none;
`