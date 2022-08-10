import {  Header, LoginForm, LoginFormHeading, LoginInput, LoginMain, LoginSubmitBtn, LoginWrapper, Logo, LogoImg, LogoText } from "./login.style"
import logoBlack from '../../assets/img/Logo-black.svg'
import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth-context"

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {getToken} = useContext(AuthContext)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        getToken({email, password})
    }
    return(
        <LoginWrapper>
            <Header>
                <Logo>
                    <LogoImg src={logoBlack} />
                    <LogoText>Boburblog</LogoText>
                </Logo>
            </Header>
            <LoginMain>
                <LoginForm onSubmit={handleFormSubmit}>
                    <LoginFormHeading>
                        Login
                    </LoginFormHeading>
                    <LoginInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Login" type={'text'}/>
                    <LoginInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type={'password'}/>
                    <LoginSubmitBtn>
                        Submit
                    </LoginSubmitBtn>
                </LoginForm>
            </LoginMain>
        </LoginWrapper>
    )
}

export default LoginPage