import Modal from '@mui/material/Modal'
import './BasicModal.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  addRound,
  setAuthorAnswer,
  setGame,
  setNameAnswer,
  setNewGame,
} from '../../store/paintersGameSlice'
import { ModalType, paintersGame, resultsGame } from '../../types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getGameObj } from '../../utils/getRandomArr'
import { setResult } from '../../store/resultsSlice'

const style = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '250px',
  height: '320px',
  borderRadius: '8px',
  boxShadow:
    '0px 1px 5px rgb(0 0 0 / 20%), 0px 3px 4px rgb(0 0 0 / 12%) 0px 2px 4px rgb(0 0 0 / 14%)',
}

const BasicModal = (props: ModalType) => {
  const [last, setLast] = useState(false)
  const state = useSelector((state: RootState) => state.paintersGame)
  const resultsState = useSelector((state: RootState) => state.results)
  const dispatch = useDispatch()
  const number = state.roundNumber

  const startNewGame = () => {
    setLast(false)
    props.handleClose()
    dispatch(setNewGame())
    const game: paintersGame = getGameObj()

    dispatch(setGame(game))
    dispatch(setAuthorAnswer(game.rounds[0].authorAnswer))
    dispatch(setNameAnswer(game.rounds[0].nameAnswer))
  }

  const useDispatchers = () => {
    dispatch(addRound())
    dispatch(setAuthorAnswer(state.arr[number + 1].authorAnswer))
    dispatch(setNameAnswer(state.arr[number + 1].nameAnswer))
  }

  const clickHandler = () => {
    props.handleClose()
    number >= 9 ? setLast(true) : useDispatchers()
  }

  const setResults = () => {
    const obj: resultsGame = {
      player: '',
      rightAnswers: state.count,
      gameType: 'painters',
    }
    dispatch(setResult(obj))
  }

  return (
    <>
      <Modal open={props.open} sx={style}>
        <div className='modal'>
          <div className='modal__answer' style={{ color: state.isAnswerTrue ? 'green' : 'red' }}>
            {state.isAnswerTrue ? 'true' : 'false'}
          </div>
          {last ? <></> : <div className='modal__answer'>Result: {state.count} / 10</div>}
          <img
            src={`https://github.com/AlionaMu/art-data/blob/main/img/${state.arr[number].id}.jpg?raw=true`}
            className='modal__image'
          ></img>
          <div className='modal__name'>{state.nameAnswer}</div>
          <div className='modal__author'>{state.authorAnswer}</div>

          {last ? (
            <>
              <div className='modal__answer'>Final result: {state.count} / 10</div>
              <Link to='/results'>
                <button className='modal__button' onClick={setResults}>
                  Results
                </button>
              </Link>
              <button className='modal__button' onClick={startNewGame}>
                Try Again
              </button>
            </>
          ) : (
            <button className='modal__button' onClick={clickHandler}>
              Continue
            </button>
          )}
        </div>
      </Modal>
    </>
  )
}

export default BasicModal
