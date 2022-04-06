import {createContext, useReducer} from 'react'
import alertReducer from './AlertsReducer'

const AlertsContext = createContext()

export const AlertProvider = ({children}) => {
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)


  // Set an alert
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {msg, type}
    }) 

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT'}), 3000)
  }
  return <AlertsContext.Provider value={{alert: state, setAlert}}>
          {children}
          </AlertsContext.Provider> 
}

export default AlertsContext