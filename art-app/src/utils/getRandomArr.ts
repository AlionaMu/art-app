import images from '../data/images'

export interface paintersGameRound {
  answer: string
  answers: string[]
  id: number
}

export interface paintersGame {
  rounds: paintersGameRound[]
  count: number
}

export const getRandomArr = () => {
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 241))
}

export const getAuthorsArr = () => {
  const arr = Array.from({ length: 4 }, () => Math.floor(Math.random() * 241))
  return arr.map((item) => images[item].author)
}

export const getGameObj = () => {
  const arr = getRandomArr()

  const objobj: paintersGame = {
    rounds: [],
    count: 0,
  }
  arr.forEach((item) => {
    const authorsArr = getAuthorsArr()
    const game: paintersGameRound = {
      answers: authorsArr,
      answer: images[item].author,
      id: item,
    }

    objobj.rounds.push(game)
  })

  return objobj
}
