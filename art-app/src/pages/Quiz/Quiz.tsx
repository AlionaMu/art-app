import { setAuthorAnswer, setGame, setNameAnswer } from '../../store/paintersGameSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch } from '../../store'
import { getGameObj } from '../../utils/getRandomArr'
import './Quiz.scss'
import { paintersGame } from '../../types'

function Quiz() {
  const dispatch = useDispatch<AppDispatch>()

  const startGame = () => {
    const game: paintersGame = getGameObj()

    dispatch(setGame(game))
    console.log('game', game)
    dispatch(setAuthorAnswer(game.rounds[0].authorAnswer))
    dispatch(setNameAnswer(game.rounds[0].nameAnswer))
  }

  return (
    <main className='main'>
      <section className='main__title-container'>quiz</section>
      <section className='quiz wrapper'>
        <div className='quiz__link quiz__link_painters'>
          <Link to='/painters'>
            <button className='quiz__button' onClick={startGame}>
              Painters
            </button>
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
