import { HeaderLink, LinkWrapper } from "./sitenav.style"

import './sitenav.scss'
const SiteNav = () => {
    return(
        <LinkWrapper>
            <HeaderLink className='navlink' to={'/filtered/All'} >All</HeaderLink>
            <HeaderLink className='navlink' to={'/filtered/Design%20Theory'} >Design Theory</HeaderLink>
            <HeaderLink className='navlink' to={'/filtered/UX'} >UX</HeaderLink>
            <HeaderLink className='navlink' to={'/filtered/UI'} >UI</HeaderLink>
            <HeaderLink className='navlink' to={'/filtered/Typography'} >Typography</HeaderLink>
        </LinkWrapper>
    )
}

export default SiteNav