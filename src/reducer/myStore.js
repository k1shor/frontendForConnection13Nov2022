import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import gameReducer from "./gameReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// export const myStore = createStore(counterReducer)
// export const myStore = createStore(gameReducer)

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    counter: counterReducer,
    game: gameReducer
})

const ourPersistedReducer = persistReducer(persistConfig, rootReducer)


// export const myStore = createStore(rootReducer)
export const myStore = createStore(ourPersistedReducer)
export const ourPersistor = persistStore(myStore)