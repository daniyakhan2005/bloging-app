
import { createRoot } from 'react-dom/client'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import Register from './Pages/Register'
import Author from './Pages/Author'
import AuthorPost from './Pages/AuthorPost'
import Category from './Pages/Category'
import CreatPost from './Pages/CreatPost'
import Dashboard from './Pages/Dashboard'
import DeletePost from './Pages/DeletePost'
import Edit from './Pages/Edit'
import ErrorPage from './Pages/ErrorPage'
import Logout from './Pages/Logout'
import PostDetail from './Pages/PostDetail'
import UserProfile from './Pages/UserProfile'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      
      {
        path:'/author',
        element:<Author/>
      },
      {
        path:'/posts/user/:id',
        element:<AuthorPost/>
      },
      {
        path:'/posts/category/:category',
        element:<Category/>
      },
      {
        path:'/creatpost',
        element:<CreatPost/>
      },
      {
        path:'/dashboard/:id',
        element:<Dashboard/>
      },
      {
        path:'/deletepost',
        element:<DeletePost/>
      },
      {
        path:'/post/:id/edit',
        element:<Edit/>
      },
      {
        path:'/error',
        element:<ErrorPage/>
      },
      {
        path:'/logout',
        element:<Logout/>
      },
      {
        path:'/post/:id',
        element:<PostDetail/>
      },
      {
        path:'/user/:id',
        element:<UserProfile/>
      },


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
