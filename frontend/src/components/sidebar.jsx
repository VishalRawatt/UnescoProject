import React from 'react'
import photo from "../photos/setting.gif"
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  const create = () => {
    window.location = "http://localhost:3000/create"
  }
  return (
    <div className='sider container-fluid'>
      <ul className='full-item '>
        <li className='list-item'>
          <div className='col-md-6'><HomeIcon /></div>
          <div className='col-md-6 newClass'>Home </div>
        </li>
        <li className='list-item'>
          <div className='col-md-6'><PhotoSizeSelectActualIcon /></div>
          <div className='col-md-6 newClass'>Posts</div></li>
        <li className='list-item' onClick={create}>
          <div className='col-md-6'><PostAddIcon /></div>
          <div className='col-md-6 newClass'>Create</div></li>
        <li className='list-item'>
          <div className='col-md-6'><LocalFireDepartmentIcon /></div>
          <div className='col-md-6 newClass'>Hot Topics</div></li>
        <li className='list-item'>
          <div className='col-md-6'><NewspaperIcon /></div>
          <div className='col-md-6 newClass'>News</div></li>
          <li className='list-item'>
          <div className='col-md-6'><SettingsIcon /></div>
          <div className='col-md-6 newClass'>Settings</div></li>
      </ul>
    </div>
  )
}

export default Sidebar