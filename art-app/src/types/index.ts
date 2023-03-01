export interface Item {
  author: string
  name: string
  year: string
  imageNum: string
}

export interface paintersGame {
  rounds: paintersGameRound[]
  count: number
}

export interface paintersGameRound {
  answers: Item[]
  authorAnswer: string
  nameAnswer: string
  id: string
  roundNumber: number
}

export interface CardsArr {
  cardsArr: Item[]
  arr: number[]
}

export type CardType = {
  handleOpen: () => void
  open: boolean
}

export type ModalType = {
  handleClose: () => void
  handleOpen: () => void
  open: boolean
}
