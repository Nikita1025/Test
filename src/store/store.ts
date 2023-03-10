import {combineReducers, legacy_createStore} from "redux";
import {elementsReducer} from "./reducers/elementsReducer";
import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'



const rootState = combineReducers({
    calculator: elementsReducer
})

export const state= legacy_createStore(rootState)
export type AppRootStateType= ReturnType<typeof rootState>

export const useAppDispatch=()=> useDispatch()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector