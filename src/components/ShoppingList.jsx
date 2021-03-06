import React, { useContext, useState } from 'react'

import { UserContext } from './context/UserContext'
import { ShoppingListContext } from './context/ShoppingListContext'
import ShoppingListItem from './ShoppingListItem'
import { clearShoppingList, clearMiscShoppingList, addMiscItem, sortList } from '../utils'


export default function ShoppingList () {
  const {user} = useContext(UserContext)
  const [shoppingList] = useContext(ShoppingListContext)
  const [sortBy, setSortBy] = useState('NAME_ASC')
  const [newItem, setNewItem] = useState('')
  const [newItemQ, setNewItemQ] = useState('')
  const sortedShoppingList = sortList([...shoppingList], sortBy)

  const clearClickHandler = () => {
    clearShoppingList(user.uid)
    clearMiscShoppingList(user.uid)
  }
  
  const submitHandler = (e) => {
    e.preventDefault()
    if (newItem) {
    addMiscItem(user.uid, newItemQ, newItem)
    setNewItem('')
    setNewItemQ('')
    }
  }


  return (
    <div className="ShoppingList">
      <div>
      {' '}
      </div>
      <div className="sort-sort">
      <button className="button is-small is-rounded is-outline clear-shopping" onClick={() => clearClickHandler()}>Clear all</button>

        <select className='recipeSortButton'  value={sortBy} onChange={evt => setSortBy(evt.target.value)}>
          <option value='NAME_ASC'>Name (A-Z)</option>
          <option value='NAME_DESC'>Name (Z-A)</option>
        </select>
        </div>
        <div className="search-pad">
      <form className="shopping-list">
        {/* <label>Add item to Shopping List</label><br></br> */}
        <input className='noBulmaBorderless newItemQ' type="number" placeholder='Quantity' value={newItemQ} onChange={e => setNewItemQ(e.currentTarget.value)} />{' '}
        <input className='noBulmaBorderless newItem' type="text" placeholder='Item, ie bananas' value={newItem} onChange={e => setNewItem(e.currentTarget.value)} />{' '}
        <h3 onClick={e => submitHandler(e)} style={{display: 'inline'}}><h3 className='plusButton' >+</h3>Add</h3>
        {/* <button className='noBulmaButton'>Add</button> */}
      </form>
      </div>
      <div className="shopping-list">
      <ul>
        {sortedShoppingList.map(shoppingListItem =>
          <li key={shoppingListItem.id}>
            <ShoppingListItem id={shoppingListItem.id} shoppingListItem={shoppingListItem}/>
          </li>
        )}
        
      </ul>
      {/* <div className="clear-shop-pad">
      <button className="button is-small is-rounded is-outline clear-shopping" onClick={() => clearClickHandler()}>Clear Shopping List</button>
      </div> */}
      </div>
    </div>
  )
}
