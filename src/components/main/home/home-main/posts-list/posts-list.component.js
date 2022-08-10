import { useDispatch, useSelector } from "react-redux"
import { PostItem } from "../posts-item/posts-item.component"
import { Posts, PostsListHeading, PostsWrapper } from "./posts-list.style"
import {useParams} from 'react-router-dom'
import { addPost, getPosts } from "../posts-slice/posts-slice"
import { useEffect } from "react"

export const PostsList = () => {

    const dispatch = useDispatch()
    const param = useParams()
    useEffect(() => {
        dispatch(getPosts(param.category))
    }, [param.category, {addPost}])
    const posts = useSelector(state => state.posts.posts)
    const data = posts.posts

    return(
        <PostsWrapper>
            <PostsListHeading>Recent Posts</PostsListHeading>
            <Posts>
                {
                    data ? data.map(post => <PostItem key={post.id} id={post.id} title={post.title} category={post.category_name} time={post.created_time}   /> ) : <b>Loading...</b>
                }
            </Posts>
        </PostsWrapper>
    )
}