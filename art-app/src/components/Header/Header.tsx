import { Link } from 'react-router-dom'
import './Header.scss'
import HeaderBurger from './HeaderBurger/HeaderBurger'
import HeaderMenu from './HeaderMenu/HeaderMenu'

const Header = () => {
  return (
    <>
      <header className='header wrapper'>
        <Link to='/home'>
          <h1 className='header__logo'>art app</h1>
        </Link>
        <HeaderMenu></HeaderMenu>
        <HeaderBurger></HeaderBurger>
      </header>
    </>
  )
}

export default Header
