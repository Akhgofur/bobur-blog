import { useSelector } from "react-redux"
import { SiteFooter } from "../home/footer/footer.component"
import { SiteHeader } from "../home/header/header.component"
import { PostItem } from "../home/home-main/posts-item/posts-item.component"
import { Posts, PostsListHeading, PostsWrapper } from "../home/home-main/posts-list/posts-list.style"

export const Searched = () => {

    const searched = useSelector(state => state.posts.searched)
    return(
        <>
        <div className="container">
            <SiteHeader/>
            <PostsWrapper style={{marginTop:'30px', marginRight:'auto', marginLeft:'auto'}} >
                <PostsListHeading>Searched Posts</PostsListHeading>
                <Posts>
                    {
                        searched ? searched.map(post => <PostItem key={post.user_id} id={post.id} title={post.title} category={post.category_name} time={post.created_at} /> ) : <b>Loading...</b>
                    }
                </Posts>
        </PostsWrapper>
        </div>
        <SiteFooter/>
        </>
    )
}