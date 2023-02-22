//     import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { RootState } from '../store';
// import { setDetailedInfo } from '../store/cardsListSlice';

import './GalleryCard.scss'

export interface Item {
  author: string
  name: string
  year: string
  imageNum: string
}

const GalleryCard = (props: any) => {
  // const state = useSelector((state: RootState) => state.cardsList)
  // const dispatch = useDispatch();

  // const onClickHandler = () => {
  //  // state.detailedInfo = props.props;

  //   dispatch(setDetailedInfo(props.props));
  // }
  return (
    <div className='gallery-card' id={props.props.imageNum}>
      <div className='gallery-card__text'>
        <div className='gallery-card__name'>Author: {props.props.author}</div>
        <div className='gallery-card__name'>Name: &quot;{props.props.name}&quot;</div>
        <div className='gallery-card__name'>Year: {props.props.year}</div>
      </div>
      <img
        src={`https://github.com/AlionaMu/art-data/blob/main/img/${props.props.imageNum}.jpg?raw=true`}
        className='gallery-card__image'
      ></img>
    </div>
  )
}

export default GalleryCard
