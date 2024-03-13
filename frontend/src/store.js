import { createStore, combineReducers, applyMiddleware } from 'redux'
 import thunk from 'redux-thunk'
 import { composeWithDevTools } from 'redux-devtools-extension'
 import { housingListReducer, housingDetailsReducer, housingReviewCreateReducer } from './reducers/housingReducers'
 import { 
  userLoginReducer, 
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,  
} from './reducers/userReducers'

 const reducer = combineReducers({
   housingList: housingListReducer,
   housingDetails: housingDetailsReducer,
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer,
   userUpdateProfile: userUpdateProfileReducer,
   housingReviewCreate: housingReviewCreateReducer,
   
 })

 const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo'))
   : null

 const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
 }

 const middleware = [thunk]

 const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
 )

 export default store
