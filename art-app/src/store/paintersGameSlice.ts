import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { paintersGame, paintersGameRound } from '../types'

const emptyArr: paintersGameRound[] = []

const initialState = {
  arr: emptyArr,
  authorAnswer: '',
  nameAnswer: '',
  roundNumber: 0,
  isAnswerTrue: false,
  count: 0,
}

const paintersGameSlice = createSlice({
  name: 'paintersGame',
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<paintersGame>) => {
      state.arr = action.payload.rounds
    },
    addRound: (state) => {
      ++state.roundNumber
    },
    setAuthorAnswer: (state, action: PayloadAction<string>) => {
      state.authorAnswer = action.payload
    },
    setNameAnswer: (state, action: PayloadAction<string>) => {
      state.nameAnswer = action.payload
    },
    setAnswer: (state, action: PayloadAction<boolean>) => {
      state.isAnswerTrue = action.payload
    },
    addCount: (state) => {
      ++state.count
    },
    setNewGame: (state) => {
      Object.assign(state, initialState)
    },
  },
})

export const {
  setGame,
  addCount,
  setAuthorAnswer,
  setNameAnswer,
  setAnswer,
  addRound,
  setNewGame,
} = paintersGameSlice.actions
export default paintersGameSlice.reducer
