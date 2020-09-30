import React from "react"

import { Link } from 'react-router-dom'
import {removeCardFromWeek} from '../utils'
export default function WeekCard ({ recipe }) {
  const styles = {
    backgroundImage: `url(${recipe.imagePath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100px'
  }
   console.log('recipe : ', recipe)
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
              {/* <i onClick={() => removeCardFromWeek(re)}class="fas fa-minus"></i> */}
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
