import { useContext, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/auth-context"
import { Modal, ModalBtnWrapper, ModalCancelBtn, ModalCategoryOption, ModalCategorySelect, ModalHeading, ModalInput, ModalInputHeading, ModalSubmitBtn, ModalTextarea, ModalWrapper } from "../edit-modal/edit-modal.style"
import { useDispatch, useSelector } from "react-redux"
import { addPost, getCategories } from "../home/home-main/posts-slice/posts-slice"

export const CreateModal = () => {
    const bodyRef = useRef()
    const titleRef = useRef()
    const categoryRef = useRef()
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCategories())
    }, [])
    const categories = useSelector(state => state.posts.categories)
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const created = {
            categoryName : categoryRef.current.value,
            title: titleRef.current.value,
            imageUrl: "https://source.unsplash.com/352x300",
            body: bodyRef.current.value
        }
        dispatch(addPost({created, token}))
        navigate(-1)
    }
    return(
        <ModalWrapper>
            <Modal onSubmit={handleFormSubmit}>
                <ModalHeading>
                    Add Post
                </ModalHeading>
                <ModalInputHeading>
                    Title
                </ModalInputHeading>
                <ModalInput ref={titleRef} type='text'/>
                <ModalInputHeading>
                    Category
                </ModalInputHeading>
                <ModalCategorySelect ref={categoryRef}>
                    {categories && categories.map(item => <ModalCategoryOption key={item.id} value={item.category_name} >{item.category_name}</ModalCategoryOption>)}
                </ModalCategorySelect>
                <ModalInputHeading>
                    Body
                </ModalInputHeading>
                <ModalTextarea cols="30" rows="3" ref={bodyRef}></ModalTextarea>
                <ModalBtnWrapper>
                    <ModalCancelBtn to='/' >Cancel</ModalCancelBtn>
                    <ModalSubmitBtn type="submit" >Submit</ModalSubmitBtn>
                </ModalBtnWrapper>
            </Modal>
        </ModalWrapper>
    )
}