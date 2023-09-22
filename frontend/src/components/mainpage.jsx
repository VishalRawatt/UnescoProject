import React from 'react'
import { Navbar } from './navbar'
import Sidebar from './sidebar'
import { QuotesBanner } from './quotes_banner'
import Post from './showPost'

function Mainpage() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <QuotesBanner />
      <Post/>
    </div>
  )
}

export default Mainpage
