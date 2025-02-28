import React, { useState } from 'react'
import messageContext from './messageContext'

const MessageContextProvider = ({children}) => {
    const [open, setOpen] = useState(false);
  return (
    <messageContext.Provider value={{open, setOpen}}>
        {children}
    </messageContext.Provider>
  )
}

export default MessageContextProvider