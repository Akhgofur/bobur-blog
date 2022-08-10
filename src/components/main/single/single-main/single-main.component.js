import { PostItem } from "../../home/home-main/posts-item/posts-item.component"
import { PostDate, PostSeen } from "../../home/home-main/posts-item/posts-item.style"
import { PostBody, PostEditModalLink, PostImg, PostsListWrapper, PostUpBtn, SingleMainContent, SingleMainHeader, SingleMainHeading, SingleMainTitle, SingleMainWrapper, TimeWrapper } from "./single-main.style"
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { editPost, getSingle } from "../../home/home-main/posts-slice/posts-slice"
import { useEffect } from "react"
import moment from "moment"
import { PostsListHeading } from "../../home/home-main/posts-list/posts-list.style"
export const SingleMain = () => {
    useEffect(()=> {
        dispatch(getSingle(id))
    }, [{editPost}])

    const param = useParams()
    const id = param.id
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts.posts)
    const data = posts && posts.slice(0, 3)
    const post = useSelector(state => state.posts.post)
    return(
        <SingleMainWrapper>
            <SingleMainContent>
                <PostUpBtn>
                    123
                </PostUpBtn>
                <SingleMainHeader>
                    <SingleMainHeading>
                        {post.category_name}
                    </SingleMainHeading>
                    <PostEditModalLink to={`/edit/${id}`}>
                    </PostEditModalLink>
                </SingleMainHeader>
                <SingleMainTitle>
                    {post.title}
                </SingleMainTitle>
                <TimeWrapper>
                    <PostDate style={{marginRight:'17px'}}>
                        {moment(post.created_at).format('MMMM Do YYYY')}
                    </PostDate>
                    <PostSeen>
                    3 minutes read
                    </PostSeen>
                </TimeWrapper>
                <PostImg src={post.main_image_url} width={733} height={352} />
                <PostBody>
                    {post.body}
                </PostBody>
                <PostsListHeading>
                More like this
                </PostsListHeading>
                <PostsListWrapper>
                    {data && data.map(item => <PostItem key={post.id} id={item.id} title={item.title} category={item.category_name} time={item.created_time} />)}
                </PostsListWrapper>
            </SingleMainContent>
        </SingleMainWrapper>
    )
}