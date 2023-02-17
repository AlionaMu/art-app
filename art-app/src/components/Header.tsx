function Header(props: any) {
  return (
    <>
      <header className='header'>
        <div className='header__wrapper'>
          <nav>
            <ul className='header__list'>
              <li className='header__list-item'>Home</li>
              <li className='header__list-item'>About Us</li>
              <li className='header__list-item'>Forms</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
