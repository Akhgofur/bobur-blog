import linkedin from '../../../../../assets/img/linkedin.svg'
import twitter from '../../../../../assets/img/twitter.svg'
import github from '../../../../../assets/img/github.svg'
import facebook from '../../../../../assets/img/facebook.svg'
import { AboutMeDesc, AboutMeHeading, AboutMeWrapper, ExploreMeBtn, SocialLink, SocialLinkImg, SocialLinks, SocialLinkWrapper } from './about.style'


export const AboutMe = () => {
    return(
        <AboutMeWrapper>
            <AboutMeHeading>What I do!</AboutMeHeading>
            <AboutMeDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
            </AboutMeDesc>
            <ExploreMeBtn>Explore Me</ExploreMeBtn>
            <SocialLinks>
                <SocialLinkWrapper>
                    <SocialLink target={'_blank'} href='https:/facebook.com' >
                        <SocialLinkImg src={facebook}/>
                    </SocialLink>
                </SocialLinkWrapper>
                <SocialLinkWrapper>
                    <SocialLink target={'_blank'} href='https:/github.com' >
                        <SocialLinkImg src={github} />
                    </SocialLink>
                </SocialLinkWrapper>
                <SocialLinkWrapper>
                    <SocialLink target={'_blank'} href='https:/twitter.com' >
                        <SocialLinkImg src={twitter} />
                    </SocialLink>
                </SocialLinkWrapper>
                <SocialLinkWrapper>
                    <SocialLink target={'_blank'} href='https:/linkedin.com'>
                        <SocialLinkImg src={linkedin} />
                    </SocialLink>
                </SocialLinkWrapper>
            </SocialLinks>
        </AboutMeWrapper>
    )
}