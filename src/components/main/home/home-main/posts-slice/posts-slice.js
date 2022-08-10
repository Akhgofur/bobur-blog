import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useState } from "react"

const initialState = {
    posts:[],
    post:{},
    searched:[],    
    status: 'idle',
    token:null,
    categories:[],
}

export const baseUrl = 'https://n36-blog.herokuapp.com'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async function(category = 'All', {rejectWithValue}) {
        try {
            const res = await fetch(`${baseUrl}/posts/bycategory?page=0`,{
                method: 'GET',
                headers:{
                    categoryname: category
                }
            })
            if(!res.ok) {
                throw new Error('Server error: ', res.status)
            }
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getCategories = createAsyncThunk(
    'posts/getCategories',
    async function(_, {rejectWithValue}) {
        try {
            const res = await fetch(`${baseUrl}/categories`,{
                method: 'GET',
            })
            if(!res.ok) {
                throw new Error('Server error: ', res.status)
            }
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async function({id,token}, {rejectWithValue}) {
        try {
            const res = await fetch(`${baseUrl}/posts/${id}`,{
                method: 'DELETE',
                headers:{
                    token
                }
            })
            if(!res.ok) {
                throw new Error('Server error: ', res.status)
            }
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const editPost = createAsyncThunk(
    'posts/editPost',
    async function({edited ,id,token}, {rejectWithValue}) {
        try {
            const res = await fetch(`${baseUrl}/posts/${id}`,{
                method: 'PUT',
                headers:{
                    token,
                    "Content-type": "application/json"
                },
                body: JSON.stringify(edited),
            })
            if(!res.ok) {
                throw new Error('Server error: ', res.status)
            }
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const addPost = createAsyncThunk(
    'posts/addPost',
    async function({created ,token}, {rejectWithValue}) {
        try {
            const res = await fetch(`${baseUrl}/posts`,{
                method: 'POST',
                headers:{
                    token,
                    "Content-type": "application/json"
                },
                body: JSON.stringify(created),
            })
            if(!res.ok) {
                throw new Error('Server error: ', res.status)
            }
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const searchPost = createAsyncThunk(
    'posts/searchPost',
    async function(value, {rejectWithValue}) {
        try {
            const res = await fetch(`${baseUrl}/posts/search?searchValue=${value}`,{
                method: 'GET',
            })
            if(!res.ok) {
                throw new Error('Server error: ', res.status)
            }
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getSingle = createAsyncThunk(
    'posts/getSingle',
    async function(id, {rejectWithValue}) {
        try {
            const res = await fetch(`${baseUrl}/posts/${id}`,{
                method: 'GET',
            })
            if(!res.ok) {
                throw new Error('Server error: ', res.status)
            }
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        getPosts(state){
            return state.posts
        },
        deletePosts(state, action) {
            return {...state, posts: state.posts.filter(post => `${post.id}` !== `${action.payload}`)}
        },
        
    },
    extraReducers(builder){
        builder
        .addCase(getPosts.fulfilled,(state, action) => {
            state.posts = action.payload
        })
        .addCase(getCategories.fulfilled,(state, action) => {
            state.categories = action.payload
        })
        .addCase(getSingle.fulfilled,(state, action) => {
            state.post = action.payload
        })
        .addCase(searchPost.fulfilled,(state, action) => {
            state.searched = action.payload
        })
    }
})

export default postsSlice.reducer
export const { deletePosts, editSync } = postsSlice.actions