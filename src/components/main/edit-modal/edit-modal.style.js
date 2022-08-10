import styled from "styled-components"
import {Link} from 'react-router-dom'

export const ModalWrapper = styled.div` 
    display: block;
    padding: 100px 15px;
`
export const Modal = styled.form`
    text-align: start;
    max-width: 450px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`
export const ModalHeading = styled.p` 
    font-weight: 700;
    font-size: 40px;
    line-height: 53px;
    color: #000;
    padding: 0;
    margin: 0;
    margin-bottom: 46px;
`
export const ModalInputHeading = styled.p` 
    font-weight: 700;
    font-size: 15px;
    line-height: 53px;
    color: #000;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
`
export const ModalInput = styled.input` 
    padding: 12px 14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #474747;
    border: none;
    border-radius: 3px;
    width: 100%;
    background-color: #F4F4F4;
    margin-bottom: 24px;
    display: inline-block;
`
export const ModalTextarea = styled.textarea` 
    padding: 12px 14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #474747;
    border: none;
    border-radius: 3px;
    width: 100%;
    background-color: #F4F4F4;
    margin-bottom: 24px;
    display: inline-block;
    resize: none;
`
export const ModalImageInput = styled.input` 
    padding: 12px 14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #474747;
    border: none;
    border-radius: 3px;
    width: 100%;
    background-color: #F4F4F4;
    margin-bottom: 24px;
    display: inline-block;
`
export const ModalCategorySelect = styled.select` 
    padding: 12px 14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #474747;
    border: none;
    border-radius: 3px;
    width: 100%;
    background-color: #F4F4F4;
    margin-bottom: 24px;
    display: inline-block;
`
export const ModalCategoryOption = styled.option` `

export const ModalBtnWrapper = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ModalCancelBtn = styled(Link)` 
    padding: 10px 15px;
    border: 1px solid #000;
    text-decoration: none;
    border-radius: 3px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #000;
    background-color:#fff;
`
export const ModalSubmitBtn = styled.button` 
    padding: 10px 15px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    background-color: #000;
    border: none;
`