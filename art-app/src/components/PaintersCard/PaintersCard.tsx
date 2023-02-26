//     import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { RootState } from '../store';
// import { setDetailedInfo } from '../store/cardsListSlice';

import { getRandomArr } from '../../utils/getRandomArr'
import './PaintersCard.scss'

export interface Item {
  author: string
  name: string
  year: string
  imageNum: string
}

const PaintersCard = (props: any) => {
  // const state = useSelector((state: RootState) => state.cardsList)
  // const dispatch = useDispatch();

  // const onClickHandler = () => {
  //  // state.detailedInfo = props.props;

  //   dispatch(setDetailedInfo(props.props));
  // }

  const randomArr = getRandomArr()
  console.log(randomArr)
  return (
    <div className='painters-card' id={props.props.imageNum}>
      <div className='painters-card__text'>Who is the author of this picture?</div>
      <img src='./images/21.jpg' className='painters-card__img'></img>
      <div className='painters-card__answers'>
        <div className='painters-card__answer' data-num='0'>
          Иван Шишкин
        </div>
        <div className='painters-card__answer' data-num='1'>
          Питер Брейгель
        </div>
        <div className='painters-card__answer' data-num='2'>
          Константин Маковский
        </div>
        <div className='painters-card__answer' data-num='3'>
          Рафаэль
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
