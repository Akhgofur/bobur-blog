import { FooterLists } from "./footer-lists/footer-lists.component"
import { Footer, FooterInner,  FooterLogoImg } from "./footer.style"
import Logowhite from '../../../../assets/img/logo-white.svg'

export const SiteFooter = () => {
    return(
        <Footer>
            <FooterInner className="container">
                    <FooterLogoImg src={Logowhite} width={182} height={70} />
                <FooterLists/>
            </FooterInner>
        </Footer>
    )
}