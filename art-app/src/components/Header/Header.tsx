import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className='header wrapper'>
        <Link to='/home'>
          <h1 className='header__logo'>art app</h1>
        </Link>
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
            <li className='header__list-item'>
              <Link to='/gallery'>
                <button className='header__button'>Gallery</button>
              </Link>
            </li>
            <li className='header__list-item'>
              <Link to='/results'>
                <button className='header__button'>Results</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
