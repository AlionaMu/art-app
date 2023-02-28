import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { paintersGame, paintersGameRound } from '../types'

const emptyArr: paintersGameRound[] = []

const initialState = {
  arr: emptyArr,
  authorAnswer: '',
  nameAnswer: '',
  roundNumber: 0,
}

const paintersGameSlice = createSlice({
  name: 'paintersGame',
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<paintersGame>) => {
      state.arr = action.payload.rounds
    },
    addCount: (state) => {
      ++state.roundNumber
    },
    setAuthorAnswer: (state, action: PayloadAction<string>) => {
      state.authorAnswer = action.payload
    },
    setNameAnswer: (state, action: PayloadAction<string>) => {
      state.nameAnswer = action.payload
    },
  },
})

export const { setGame, addCount, setAuthorAnswer, setNameAnswer } = paintersGameSlice.actions
export default paintersGameSlice.reducer
