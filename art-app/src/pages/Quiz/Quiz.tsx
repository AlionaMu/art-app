import { Link } from 'react-router-dom'
import './Quiz.scss'

function Quiz() {
  return (
    <main className='main wrapper quiz'>
      <h1 className='quiz__title'>QUIZ</h1>
      <div className='quiz__link quiz__link_painters'>
        <Link to='/painters'>
          <button className='quiz__button'>Painters</button>
        </Link>
      </div>
      <div className='quiz__link quiz__link_paintings'>
        <Link to='/paintings'>
          <button className='quiz__button'>Paintings</button>
        </Link>
      </div>
    </main>
  )
}

export default Quiz
