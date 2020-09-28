import React, { useState, useContext } from 'react'
import { MiscShoppingContext } from './MiscShoppingContext'
import { addMiscItem } from '../utils'

const MiscShoppingListItem = () => {
  const [miscItem, setMiscItem] = useState('')
  const [miscCollection] = useContext(MiscShoppingContext)

  const onSubmitHandler = (evt) => {
    evt.preventDefault()
    addMiscItem(miscItem)
    setMiscItem('')
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>Add item to Shopping List</label><br></br>
        <input type="text" value={miscItem} onChange={e => setMiscItem(e.currentTarget.value)} />
        <button>Add</button>
        <ul>
          {miscCollection.map(item =>
            <li key={item.id}>
              <h5>{item.newItem}</h5>
            </li>
          )}
        </ul>
      </form>
    </>
  )
}

export default MiscShoppingListItem
