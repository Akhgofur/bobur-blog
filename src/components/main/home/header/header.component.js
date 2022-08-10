import { Logo, LogoImg, LogoText } from "../../../login/login.style"
import LogoBlack from '../../../../assets/img/Logo-black.svg'
import { MainHeader } from "./header.style"
import SiteNav from "./sitenav/sitenav.component"
import Search from "./search/search.component"
import { HeaderLink } from "./sitenav/sitenav.style"
export const SiteHeader = () => {
    return(
        <MainHeader>
            <Logo>
                <LogoImg src={LogoBlack} />
                <LogoText>BoburBlog</LogoText>
            </Logo>
            <SiteNav/>
            <Search/>
            <HeaderLink className='addPost' to={'/create'}>
                Add Post
            </HeaderLink>
        </MainHeader>
    )
}