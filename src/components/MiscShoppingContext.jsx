import React, { useState, createContext, useEffect } from 'react'
import firebase from 'firebase/app'

export const MiscShoppingContext = createContext()

export const MiscShoppingProvider = ({ children }) => {
  const [miscCollection, setMiscCollection] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('miscShoppingList')
      .onSnapshot(snapshot => {
        const miscCollection = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setMiscCollection(miscCollection)
      })
    return () => unsubscribe()
  }, [])

  return (
    <MiscShoppingContext.Provider value={[miscCollection, setMiscCollection]}>
      {children}
    </MiscShoppingContext.Provider>
  )
}
