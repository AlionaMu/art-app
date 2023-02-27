import { setGame } from '../../store/paintersGameSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState, store } from '../../store'
import { getGameObj } from '../../utils/getRandomArr'
import './Quiz.scss'

function Quiz() {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state.paintersGame)

  const startGame = () => {
    const game: any = getGameObj()

    dispatch(setGame(game))
    console.log('game', game)
    console.log('state', state)
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
