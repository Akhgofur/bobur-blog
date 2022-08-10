import { useNavigate, useParams } from "react-router-dom"
import { Modal, ModalBtnWrapper, ModalCancelBtn, ModalCategoryOption, ModalCategorySelect, ModalHeading, ModalInput, ModalInputHeading, ModalSubmitBtn, ModalTextarea, ModalWrapper } from "./edit-modal.style"
import { useSelector, useDispatch } from "react-redux"
import { useContext, useEffect, useRef } from "react"
import { editPost, getSingle } from "../home/home-main/posts-slice/posts-slice"
import { AuthContext } from "../../../context/auth-context"

export const EditModal = () => {
    const param = useParams()
    const dispatch = useDispatch()
    const id = param.id
    useEffect(()=> {
        dispatch(getSingle(id))
    }, [])
    const post = useSelector(state => state.posts.post)
    const categories = useSelector(state => state.posts.categories)
    const bodyRef = useRef()
    const titleRef = useRef()
    const categoryRef = useRef()
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)
    const handleEditSubmit = (e) => {
        e.preventDefault()
        const edited = {
            categoryName : categoryRef.current.value,
            title: titleRef.current.value,
            imageUrl: "https://source.unsplash.com/352x300",
            body: bodyRef.current.value
        }
        // const syncEdited = {
        //     category_name:categoryRef.current.value,
        //     title:titleRef.current.value,
        //     main_image_url:"https://source.unsplash.com/352x300",
        //     body:bodyRef.current.value,
        //     user_id: post.user_id,
        //     created_at: new Date().toISOString,
        //     id
        // }
        dispatch(editPost({edited, id, token}))
        navigate(-1)
    }

    return(
        <ModalWrapper>
            <Modal onSubmit={handleEditSubmit}>
                <ModalHeading>
                    Editing
                </ModalHeading>
                <ModalInputHeading>
                    Title
                </ModalInputHeading>
                <ModalInput ref={titleRef} type='text' defaultValue={post.title} />
                <ModalInputHeading>
                    Category
                </ModalInputHeading>
                <ModalCategorySelect ref={categoryRef}>
                    {categories && categories.map(item => {
                        if(item.category_name === post.category_name) {
                            return <ModalCategoryOption key={item.id} selected={true} value={item.category_name} >{item.category_name}</ModalCategoryOption>
                        }
                        else{
                            return <ModalCategoryOption key={item.id} value={item.category_name} >{item.category_name}</ModalCategoryOption>
                        }
                         
                    } )}
                </ModalCategorySelect>
                <ModalInputHeading>
                    Body
                </ModalInputHeading>
                <ModalTextarea cols="30" rows="3" ref={bodyRef} defaultValue={post.body} ></ModalTextarea>
                <ModalBtnWrapper>
                    <ModalCancelBtn to='/' >Cancel</ModalCancelBtn>
                    <ModalSubmitBtn type="submit" >Submit</ModalSubmitBtn>
                </ModalBtnWrapper>
            </Modal>
        </ModalWrapper>
    )
}