import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { CardType } from '../../types'
import './PaintersCard.scss'

const PaintersCard = (props: CardType) => {
  const state = useSelector((state: RootState) => state.paintersGame)

  const onClickHandler = () => {
    props.handleOpen()
  }

  const number = state.roundNumber

  return (
    <div className='painters-card' id={state.arr[number].id.toString()}>
      <div className='painters-card__text'>Who is the author of this picture?</div>
      <img
        src={`https://github.com/AlionaMu/art-data/blob/main/img/${state.arr[number].id}.jpg?raw=true`}
        className='painters-card__img'
      ></img>
      <div className='painters-card__answers' onClick={onClickHandler}>
        <div className='painters-card__answer' data-num='0'>
          {state.arr[number].answers[0].author}
        </div>
        <div className='painters-card__answer' data-num='1'>
          {state.arr[number].answers[1].author}
        </div>
        <div className='painters-card__answer' data-num='2'>
          {state.arr[number].answers[2].author}
        </div>
        <div className='painters-card__answer' data-num='3'>
          {state.arr[number].answers[3].author}
        </div>
      </div>
    </div>
  )
}

export default PaintersCard
