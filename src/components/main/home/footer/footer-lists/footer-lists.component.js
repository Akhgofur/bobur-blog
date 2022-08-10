import { FooterItem, FooterItemLink, FooterList, FooterListHeading, FooterListWrapper } from "./footer-lists.style"

export const FooterLists = () => {
    const sm = ['Twitter', 'Instagram', 'Telegram', 'You Tube', 'Figma']
    const works = ['Xalq Kutubxonasi', 'Websitee', 'Website', 'Play Market', 'App Store']
    const contact = ['Contact', 'Blog', 'Dribbble', 'Behance']
    return(
        <FooterListWrapper>
            <FooterList>
                <FooterListHeading>
                FIGHT WITH ME ON:
                </FooterListHeading>
                {
                    sm.map(item => <FooterItem key={item}><FooterItemLink href="#" >{item}</FooterItemLink></FooterItem>)
                }
                
            </FooterList>
            <FooterList>
                <FooterListHeading>
                WHAT I HAVE DONE:
                </FooterListHeading>
                {
                    works.map(item => <FooterItem key={item}><FooterItemLink  href="#" >{item}</FooterItemLink></FooterItem>)
                }
            </FooterList>
            <FooterList>
                {
                    contact.map(item => <FooterItem key={item}><FooterItemLink href="#" >{item}</FooterItemLink></FooterItem>)
                }   
            </FooterList>
        </FooterListWrapper>
    )
}