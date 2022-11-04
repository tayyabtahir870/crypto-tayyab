import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar1 from './Sidebar1'

function Base(props) {
  return (
    <div>
        <Header/>
       {props.children}
        <Footer/>

    </div>
  )
}

export default Base