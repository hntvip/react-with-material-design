import { applyMiddleware } from "redux"
import { middlewares } from "../../createStore"
import { createStore } from "redux"
import appReducers from "../../reducers";


export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(appReducers,initialState);
}