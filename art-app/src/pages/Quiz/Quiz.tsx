import { Link } from 'react-router-dom'
import './Quiz.scss'

function Quiz() {
  return (
    <main className='main'>
      <section className='main__title-container'>quiz</section>
      <section className='quiz wrapper'>
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
      </section>
    </main>
  )
}

export default Quiz
