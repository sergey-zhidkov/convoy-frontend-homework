import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { offerReducers } from "./reducers"
import { createLogger } from "redux-logger"

export const rootReducer = combineReducers({
    offerReducers,
})

export type RootState = ReturnType<typeof rootReducer>

const logger = createLogger({
    // ...options
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
