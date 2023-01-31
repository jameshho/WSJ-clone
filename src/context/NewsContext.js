import { createContext, useContext } from 'react'
// import dataArticle from '../dataSet/dataArticle'

const NewsContext = createContext()



export const NewsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(workoutsReducer, { 
//     workouts: null
//   })
  // const dataArticle = dataArticle
  
  return (
    // to pass in below
    //dataArticle is an array of objects
    <NewsContext.Provider value={{ }}>
      { children }
    </NewsContext.Provider>
  )
}
export const UseNewsContext = ()=>{
  return useContext(NewsContext)
}