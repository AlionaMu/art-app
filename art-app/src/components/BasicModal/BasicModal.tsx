import Modal from '@mui/material/Modal'
import './BasicModal.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { addCount, setAuthorAnswer, setNameAnswer } from '../../store/paintersGameSlice'
import { ModalType } from '../../types'

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
  const state = useSelector((state: RootState) => state.paintersGame)
  const dispatch = useDispatch()
  const number = state.roundNumber

  const useDispatchers = () => {
    dispatch(addCount())
    dispatch(setAuthorAnswer(state.arr[number + 1].authorAnswer))
    dispatch(setNameAnswer(state.arr[number + 1].nameAnswer))
  }

  const clickHandler = () => {
    props.handleClose()
    number >= 9 ? console.log('>>>>>') : useDispatchers()
  }

  return (
    <>
      <Modal open={props.open} sx={style}>
        <div className='modal'>
          <div className='modal__answer' style={{ color: state.isAnswerTrue ? 'green' : 'red' }}>
            {state.isAnswerTrue ? 'true' : 'false'}
          </div>
          <img
            src={`https://github.com/AlionaMu/art-data/blob/main/img/${state.arr[number].id}.jpg?raw=true`}
            className='modal__image'
          ></img>
          <div className='modal__name'>{state.nameAnswer}</div>
          <div className='modal__author'>{state.authorAnswer}</div>
          <button className='modal__button' onClick={clickHandler}>
            Continue
          </button>
        </div>
      </Modal>
    </>
  )
}

export default BasicModal
