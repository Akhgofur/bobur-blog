import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchPost } from "../../home-main/posts-slice/posts-slice"
import { SearchBtn, SearchForm, SearchInput } from "./search.style"
import { useNavigate } from "react-router-dom"

const Search = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const handleSubmitForm = (e) => {
        e.preventDefault()
        dispatch(searchPost(value))
        navigate('/searched')

    }
    return(
        <SearchForm onSubmit={handleSubmitForm} >
            <SearchInput value={value} onChange={(e)=> setValue(e.target.value)} placeholder="Search" type='text'/>
            <SearchBtn type="submit"></SearchBtn>
        </SearchForm>
    )
}

export default Search