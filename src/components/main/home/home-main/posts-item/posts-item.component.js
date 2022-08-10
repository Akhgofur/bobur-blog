import moment from "moment"
import { useContext } from "react"
import { useDispatch } from "react-redux"
import { AuthContext } from "../../../../../context/auth-context"
import { deletePost, deletePosts } from "../posts-slice/posts-slice"
import { Post, PostCategory, PostDate, PostDeleteBtn, PostDesc, PostHeader, PostInfoWrapper, PostLink, PostSeen } from "./posts-item.style"

export const PostItem = ({id,title,category,time}) => {
    const dispatch = useDispatch()
    const {token} = useContext(AuthContext)

    const handleDeletePost = (e) => {
        const id = e.target.dataset.id
        dispatch(deletePost({id, token}))
        dispatch(deletePosts(id))
    }
    return(
        <Post>
                <PostLink to={`/single/${id}`} ></PostLink>
            <PostHeader>
                <PostDate>
                {moment(time).format('MMMM Do YYYY')}
                </PostDate>
                <PostCategory>
                {category}
                </PostCategory>
            </PostHeader>
            <PostDesc>
            {title}
            </PostDesc>
            <PostInfoWrapper>
                <PostSeen>
                3 minutes read
                </PostSeen>
                <PostDeleteBtn data-id={id} onClick={handleDeletePost}>
                    Delete
                </PostDeleteBtn>
            </PostInfoWrapper>
        </Post>
    )
}