import styled from "styled-components"

export const LoginWrapper = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`
export const LogoImg = styled.img`
    margin-right: 15px;
    width: 58px;
    height: 58px;
    @media (max-width: 600px) {
        width: 33px;
        height: 33px;
    }
`
export const LogoText = styled.p`
    font-weight: 500;
    font-size: 25px;
    line-height: 33px;
    padding: 0;
    margin: 0;
    @media (max-width:600px) {
        font-size: 14.3377px;
        line-height: 19px;
    }
`

export const LoginMain = styled.div` 
    padding: 200px 0;
`

export const Header = styled.header`
    padding: 26px 0;

`
export const LoginForm = styled.form`
    max-width: 350px;
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`
export const LoginFormHeading = styled.h2` 
    font-weight: 700;
    font-size: 40px;
    line-height: 53px;
    color: #000;
    padding: 0;
    margin: 0;
    margin-bottom: 56px;
`
export const LoginInput = styled.input`
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
export const LoginSubmitBtn = styled.button`
    padding: 11px 0;
    border: none;
    border-radius: 3px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    background-color: #000;
    width: 100%;
`