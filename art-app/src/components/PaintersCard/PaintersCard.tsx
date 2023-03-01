import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { setAnswer } from '../../store/paintersGameSlice'
import { CardType, Item } from '../../types'
import './PaintersCard.scss'

const PaintersCard = (props: CardType) => {
  const state = useSelector((state: RootState) => state.paintersGame)
  const dispatch = useDispatch<AppDispatch>()
  const number = state.roundNumber
  const onClickHandler = (target: HTMLButtonElement) => {
    const value = target.dataset.text
    value === state.arr[number].nameAnswer ? dispatch(setAnswer(true)) : dispatch(setAnswer(false))
    props.handleOpen()
  }

  return (
    <div className='painters-card' id={state.arr[number].id.toString()}>
      <div className='painters-card__text'>Who is the author of this picture?</div>
      <img
        src={`https://github.com/AlionaMu/art-data/blob/main/img/${state.arr[number].id}.jpg?raw=true`}
        className='painters-card__img'
      ></img>
      <div
        className='painters-card__answers'
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          onClickHandler(e.target as HTMLButtonElement)
        }
      >
        {state.arr[number].answers.map((item: Item, i: number) => {
          return (
            <div className='painters-card__answer' key={i + 1} data-text={item.name}>
              {item.author}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PaintersCard
