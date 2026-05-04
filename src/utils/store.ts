import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

// Inline localStorage adapter — avoids redux-persist/lib/storage CJS import
// issues in Vite ESM builds
const storage = {
  getItem: (key: string) => Promise.resolve(window.localStorage.getItem(key)),
  setItem: (key: string, value: string) =>
    Promise.resolve(window.localStorage.setItem(key, value)),
  removeItem: (key: string) =>
    Promise.resolve(window.localStorage.removeItem(key)),
}

// combineReducers requires at least one real reducer function.
// Add slices here as the app grows:  auth: authReducer, user: userReducer, …
const rootReducer = combineReducers({
  app: (state: Record<string, unknown> = {}) => state,
})

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [] as string[], // add reducer slice names to persist
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer(persistConfig, rootReducer as any)

const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export default store
