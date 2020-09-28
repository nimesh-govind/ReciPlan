import firebase from 'firebase/app'

export const addRecipe = (Recipe) => {
  firebase
    .firestore()
    .collection('recipes')
    .add(Recipe)
    .then(firestoreRef => {
      console.log('Recipe successfully added!', firestoreRef)
      return null
    }).catch((error) => {
      console.error('Error adding recipe: ', error)
    })
}

export const deleteRecipe = (recipeId, props) => {
  firebase
    .firestore()
    .collection('recipes')
    .doc(recipeId)
    .delete()
    .then(() => {
      console.log('Recipe successfully deleted!')
      return null
    }).catch((error) => {
      console.error('Error deleting recipe: ', error)
    })
  props.history.push('/recipes')
}

export const UpdateRecipe = (recipe) => {
  firebase
    .firestore()
    .collection('recipes')
    .update({ recipe })
    .then(() => {
      console.log('Recipe successfully added!')
      return null
    }).catch((error) => {
      console.error('Error adding recipe: ', error)
    })
}

export const updateRecipe = (Recipe) => {
  firebase
    .firestore()
    .collection('recipes')
    .update(Recipe)
    .then(() => {
      console.log('Recipe successfully updated!')
      return null
    }).catch((error) => {
      console.error('Error updating recipe: ', error)
    })
}

// export const addIngredients = (recipeId, recipeIngredients) => {
//   firebase
//     .firestore()
//     .collection('shoppingList')
//     .add({
//       recipeId: recipeId,
//       day: null,
//       ingredients: recipeIngredients
//     })
//     .then((firestoreRef) => {
//       console.log("Ingredients successfully added to shopping list!", firestoreRef.id)
//       return firestoreRef.id
//       }).catch((error) => {
//           console.error("Error adding ingredients: ", error)
//       })
// }
export const assignRecipeToWeekDay = (newWeekDayAssignment) => {
  firebase
    .firestore()
    .collection('week')
    .doc('XIZ75grLVIiFREmkcTlp')
    .update(newWeekDayAssignment)
    .then(firestoreRef => {
      console.log('Recipe successfully assigned!', newWeekDayAssignment)
      return null
    }).catch((error) => {
      console.error('Error assigning recipe: ', error)
    })
}

export const deleteCardRecipe = (recipe) => {
  if (window.confirm('Are you sure you want to delete this recipe?')) {
    firebase
      .firestore()
      .collection('recipes')
      .doc(recipe.id)
      .delete()
      .then(firestoreRef => {
        console.log('Recipe successfully deleted!', firestoreRef)
        return null
      }).catch((error) => {
        console.error('Error deleting recipe: ', error)
      })
  }
}

export const clearWeekDayAssignments = () => {
  firebase
    .firestore()
    .collection('week')
    .doc('XIZ75grLVIiFREmkcTlp')
    .update({
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
    })
    .then(() => {
      console.log('Week assignments cleared')
      return null
    }).catch((error) => {
      console.error('Error clearing week assignments : ', error)
    })
}

export const addIngredientsToList = (recipe, recipeId) => {
  const newIngredients = recipe.ingredients

  firebase
    .firestore()
    .collection('shoppingList')
    .add({
      recipeId: recipeId,
      ingredients: newIngredients
    })
    .then(id => {
      console.log('Ingredients successfully added!', id.id)
      return null
    }).catch((error) => {
      console.error('Error adding ingredients: ', error)
    })
}

export const removeIngredientsFromList = (recipeId) => {
  firebase
    .firestore()
    .collection('shoppingList')
    .where('recipeId', '==', recipeId)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete()
      })
      return null
    })
    .catch(function (error) {
      console.log('Error deleting ingredients: ', error)
    })
}

export const clearShoppingList = () => {
  firebase
    .firestore()
    .collection('shoppingList')
    .get()
    .then(response => {
      response.forEach(shoppingListEntry => {
        shoppingListEntry.ref.delete()
        console.log('Shopping list successfully cleared!')
      })
      return null
    })
    .catch(function (error) {
      console.log('Error deleting ingredients: ', error)
    })
  firebase
    .firestore()
    .collection('miscShoppingList')
    .get()
    .then(response => {
      response.forEach(shoppingListEntry => {
        shoppingListEntry.ref.delete()
        console.log('Misc shopping list successfully cleared!')
      })
      return null
    })
    .catch(function (error) {
      console.log('Error deleting ingredients: ', error)
    })
}

export const addMiscItem = (newItem) => {
  firebase
    .firestore()
    .collection('miscShoppingList')
    .add({
      newItem: newItem
    })
    .then((firestoreRef) => {
      console.log('Misc item successfully added to shopping list!', firestoreRef.id)
      return firestoreRef.id
    }).catch((error) => {
      console.error('Error adding item: ', error)
    })
}

export const sortRecipes = (recipes, sortBy) => {
  const sortedRecipes = recipes.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    switch (sortBy) {
      case 'NAME_ASC':
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      case 'NAME_DESC':
        if (nameA > nameB) {
          return -1
        }
        if (nameA < nameB) {
          return 1
        }
        return 0
      default:
        break
    }
  })

  return sortedRecipes
}

export const capitalise = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
