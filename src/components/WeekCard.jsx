import React, {useContext} from "react"
import {WeekContext} from './context/WeekContext'
import { Link } from 'react-router-dom'
import {removeCardFromWeek} from '../utils'
export default function WeekCard ({ recipe, id }) {
  const styles = {
    backgroundImage: `url(${recipe.imagePath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100px'
  }
  const [week] = useContext(WeekContext)
  const removeWeekCard = () => {
    let correct = ''
    let recipeSelected= ''
    recipe.userId == id ? recipeSelected=recipe.id : console.log('nope')
      
      week.monday == recipeSelected ? correct= week.monday : console.log('not monday')
      week.tuesday == recipeSelected ? correct= week.tuesday : console.log('not tuesday')
      week.wednesday == recipeSelected ? correct= week.wednesday : console.log('not wednesday')
      week.thursday == recipeSelected ? correct= week.thursday : console.log('not thursday')
      week.friday == recipeSelected ? correct= week.friday : console.log('not friday')
      week.saturday == recipeSelected ? correct= week.saturday : console.log('not saturday')
      week.sunday == recipeSelected ? correct= week.sunday : console.log('not sunday')
    
    removeCardFromWeek(id, recipeSelected)
    
  }
    return (
      <>
      <div className="box">
      <Link to={{ pathname: `/recipe/${recipe.id}`, recipe: recipe }}>
        <article className="media" >
          <div className="media-left">
            <figure className="image is-96x96">
              {/* <img src={recipe.imagePath} alt={recipe.name} /> */}
              <div style={styles}></div>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong className="subtitle">{recipe.name}</strong>
                <br />
              </p>
              <span className='minusButton'>
              <Link onClick={() => removeWeekCard()}><i class="fas fa-minus"></i></Link>
              </span>
            </div>
            <nav className="level is-mobile">
            <div className="level-left">
            </div>
            </nav>
          </div>
        </article>
        </Link>
      </div>
    </>
  )
}
