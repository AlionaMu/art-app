import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom';
import { RootState } from '../../store'
import { addCount } from '../../store/paintersGameSlice'
import './PaintersCard.scss'

export interface Item {
  author: string
  name: string
  year: string
  imageNum: string
}

const PaintersCard = (props: any) => {
  const state = useSelector((state: RootState) => state.paintersGame)
  const dispatch = useDispatch()

  const onClickHandler = () => {
    props.handleOpen()
    dispatch(addCount())
  }
  const number = state.roundNumber
  const arrNumber = state.arr[number]
  console.log('state in card', state.arr.rounds[number])
  console.log(arrNumber)
  return (
    <div className='painters-card' id={state.arr.rounds[number].id}>
      <div className='painters-card__text'>Who is the author of this picture?</div>
      <img
        src={`https://github.com/AlionaMu/art-data/blob/main/img/${state.arr.rounds[number].id}.jpg?raw=true`}
        className='painters-card__img'
      ></img>
      <div className='painters-card__answers' onClick={onClickHandler}>
        <div className='painters-card__answer' data-num='0'>
          {state.arr.rounds[number].answers[0]}
        </div>
        <div className='painters-card__answer' data-num='1'>
          {state.arr.rounds[number].answers[1]}
        </div>
        <div className='painters-card__answer' data-num='2'>
          {state.arr.rounds[number].answers[2]}
        </div>
        <div className='painters-card__answer' data-num='3'>
          {state.arr.rounds[number].answers[3]}
        </div>
      </div>
    </div>
  )
}

export default PaintersCard

// <img
//         src={`https://github.com/AlionaMu/art-data/blob/main/img/${props.props.imageNum}.jpg?raw=true`}
//         className='gallery-card__image'
//       ></img>
