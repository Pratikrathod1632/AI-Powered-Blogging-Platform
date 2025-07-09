import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Layout from './pages/admin/Layout.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import AddBlog from './pages/admin/AddBlog.jsx'
import ListBlog from './pages/admin/ListBlog.jsx'
import Comments from './pages/admin/Comments.jsx'
import Login from './components/admin/Login.jsx'
import 'quill/dist/quill.snow.css'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/admin' element={true ? <Layout/> :<Login/>}>
          <Route index element={<Dashboard/>} />
          <Route path='addBlog' element={<AddBlog/>} />
          <Route path='listBlog' element={<ListBlog/>} />
          <Route path='comments' element={<Comments/>} />

        </Route>
        
      </Routes>
    </div>
  )
}

export default App
