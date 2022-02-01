import React, { useReducer, useEffect } from 'react'
import * as R from 'ramda'

const createDataContext = (redu, actions, initVal) => {
  const Context = React.createContext()
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(redu, initVal)
    const boundActions = R.map((key) => key(dispatch), actions)
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }
  return { Context, Provider }
}
export default createDataContext
