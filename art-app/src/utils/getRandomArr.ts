import { CardsArr } from './../types/index'
import images from '../data/images'
import { Item, paintersGame, paintersGameRound } from '../types'

export const getCardsArr = () => {
  const arr = Array.from({ length: 4 }, () => Math.floor(Math.random() * 241))
  const cardsArr: Item[] = []
  arr.forEach((item) => {
    const card: Item = {
      author: images[item].author,
      name: images[item].name,
      year: images[item].year,
      imageNum: images[item].imageNum,
    }
    cardsArr.push(card)
  })
  return { cardsArr, arr }
}

const getRandomCard = (arr: Item[]) => {
  const cardsArr = arr.map((item: Item) => item.imageNum)
  const i = Math.floor(Math.random() * cardsArr.length)
  return +arr[i].imageNum
}

export const getGameObj = () => {
  const game: paintersGame = {
    rounds: [],
    count: 0,
  }

  while (game.rounds.length < 10) {
    const authorsArr: CardsArr = getCardsArr()
    const answer = getRandomCard(authorsArr.cardsArr)
    const round: paintersGameRound = {
      answers: authorsArr.cardsArr,
      authorAnswer: images[answer].author,
      nameAnswer: images[answer].name,
      id: images[answer].imageNum,
      roundNumber: game.rounds.length,
    }
    game.rounds.push(round)
  }
  return game
}
