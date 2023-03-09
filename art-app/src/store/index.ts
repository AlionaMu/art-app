import { configureStore } from '@reduxjs/toolkit'
import paintersGameReducer from '../store/paintersGameSlice'
import resultsSliceReducer from './resultsSlice'

export const store = configureStore({
  reducer: {
    paintersGame: paintersGameReducer,
    results: resultsSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
