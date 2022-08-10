import {  useEffect } from "react"
import { useDispatch} from "react-redux"
import { getCategories, getPosts } from "./home/home-main/posts-slice/posts-slice"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "./home/home.component"
import { SinglePost } from "./single/single.component"
import { Searched } from "./searched/searched.component"
import { EditModal } from "./edit-modal/edit-modal.component"
import { CreateModal } from "./create-modal/create-modal.component"

const SiteMain = () => {
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    useEffect(() => {
        dispatch(getCategories())
    }, [])
        
    return(

        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>} />
                <Route path="/filtered/:category" element={<Home/>}/>
                <Route path="/single/:id" element={<SinglePost/>} />
                <Route path="/searched" element={<Searched/>} />
                <Route path="/edit/:id" element={<EditModal/>} />
                <Route path="/create" element={<CreateModal/>} />
            </Routes>
        </BrowserRouter>
        
        
    )
}

export default SiteMain