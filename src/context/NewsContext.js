import { createContext, useReducer } from 'react'

export const NewsContext = createContext()

// export const workoutsReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_WORKOUTS':
//       return { 
//         workouts: action.payload 
//       }
//     case 'CREATE_WORKOUT':
//       return { 
//         workouts: [action.payload, ...state.workouts] 
//       }
//     case 'DELETE_WORKOUT':
//       return { 
//         workouts: state.workouts.filter(w => w._id !== action.payload._id) 
//       }
//     default:
//       return state
//   }
// }

export const NewsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(workoutsReducer, { 
//     workouts: null
//   })
  
  return (
    // to pass in below
    <NewsContext.Provider value={{ }}>
      { children }
    </NewsContext.Provider>
  )
}