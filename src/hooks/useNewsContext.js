import { NewsContext } from "../context/NewsContext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
  const context = useContext(NewsContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
  }

  return context
}