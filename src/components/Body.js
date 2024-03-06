import React from 'react'
import Maincontainer from "./Maincontainer";
import SideBar from "./Sidebar"

const Body = () => {
  return (
    <div className='flex'>
      <SideBar></SideBar>
      <Maincontainer></Maincontainer>
    </div>
  )
}

export default Body