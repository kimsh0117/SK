import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
  Action,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import applicationReducer from './applicationSlice'
import logger from 'redux-logger'
import { useDispatch } from 'react-redux'

const reducer = combineReducers({ application: applicationReducer })

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
})

export type RootState = ReturnType<typeof reducer>
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>()
