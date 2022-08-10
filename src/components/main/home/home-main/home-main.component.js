import { AboutMe } from "./about/about.component"
import { MainWrapper } from "./home-main.style"
import { PostsList } from "./posts-list/posts-list.component"

export const HomeMain = () => {
    return(
        <MainWrapper>
            <AboutMe/>
            <PostsList/>
        </MainWrapper>
    )
}