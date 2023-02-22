import './Header.scss'
import { Link, Outlet } from 'react-router-dom'

function Header(props: any) {
  return (
    <>
      <header className='header wrapper'>
        <h1 className='header__logo'>art app</h1>
        <nav className='header__nav'>
          <ul className='header__list'>
            <li className='header__list-item'>
              <Link to='/'>
                <button className='header__button'>Home</button>
              </Link>
            </li>
            <li className='header__list-item'>
              <Link to='/about'>
                <button className='header__button'>About Us</button>
              </Link>
            </li>
            <li className='header__list-item'>
              <Link to='/quiz'>
                <button className='header__button'>Quiz</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
