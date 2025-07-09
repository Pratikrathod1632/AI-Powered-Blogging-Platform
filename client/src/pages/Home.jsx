import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import BlogList from '../components/BlogList.jsx'
import Newletter from '../components/Newletter.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BlogList />
      <Newletter />
      <Footer />
    </>
  )
}

export default Home
