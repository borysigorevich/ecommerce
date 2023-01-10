import {configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    PURGE,
    PAUSE,
    PERSIST,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './cartSlice'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store)

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch