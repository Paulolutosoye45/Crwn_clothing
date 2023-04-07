import React,{Fragment} from 'react'
import   CrwnLogo  from '../../assets/crown.svg';
import { Outlet,Link } from 'react-router-dom'
import './Navigation.styles.scss'

function Navigation() {
  return (
    <Fragment>
    <div className='navigation'>
      <Link className='logo-container' to='/'>
       <img src={CrwnLogo} className='logo' alt="" />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
  )
}

export default Navigation
