import React, { useState } from 'react'

const AddSingleIngredient = () => {
  const [inputList, setInputList] = useState([{ newIngredient: '' }])

  const handleInputChange = (evt, idx) => {
    const { name, value } = evt.target
    const list = [...inputList]
    list[idx][name] = value
    setInputList(list)
  }

  const handleRemoveClick = idx => {
    const list = [...inputList]
    list.splice(idx, 1)
    setInputList(list)
  }

  const handleAddClick = () => {
    setInputList([...inputList, { newIngredient: '' }])
  }

  return (
    <div className="newIngredientField">
      {inputList.map((x, idx) => {
        return (
          <div>
            <input
              name="newIngredient"
			        placeholder="Enter Ingredient"
              value={x.newIngredient}
              onChange={evt => handleInputChange(evt, idx)}
            />
            <div>
              {inputList.length !== 1 && <button
                onClick={() => handleRemoveClick(idx)}>Remove</button>}
              {inputList.length - 1 === idx && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AddSingleIngredient
