import { configureStore } from '@reduxjs/toolkit'
import paintersGameReducer from '../store/paintersGameSlice'

export const store = configureStore({
  reducer: {
    paintersGame: paintersGameReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
