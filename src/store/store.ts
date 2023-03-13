// eslint-disable-next-line import/named
import { configureStore, Dispatch } from '@reduxjs/toolkit';
// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

import { elementsReducer } from './reducers/elementsReducer';

const rootState = combineReducers({
  calculator: elementsReducer,
});

export const store = configureStore({
  reducer: rootState,
});
export type AppRootStateType = ReturnType<typeof rootState>;

export const useAppDispatch = (): Dispatch => useDispatch();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
