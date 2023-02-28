import images from '../data/images'
import { Item, paintersGame, paintersGameRound } from '../types'

// export const getRandomArr = () => {
//   return Array.from({ length: 10 }, () => Math.floor(Math.random() * 241))
// }

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
  return Math.floor(Math.random() * cardsArr.length)
}

export const getGameObj = () => {
  const game: paintersGame = {
    rounds: [],
    count: 0,
  }

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  array.forEach((item) => {
    const authorsArr = getCardsArr()
    const answer = getRandomCard(authorsArr.cardsArr)
    console.log('answer', answer)
    const round: paintersGameRound = {
      answers: authorsArr.cardsArr,
      authorAnswer: images[answer].author,
      nameAnswer: images[answer].name,
      id: images[answer].imageNum,
      roundNumber: item,
    }
    console.log(round)
    game.rounds.push(round)
  })

  return game
}
