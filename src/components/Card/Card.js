import React from 'react'
import PropTypes from 'prop-types'
const Card = ({ idea, removeIdea}) => {
  const { title, body, id, } = idea
  return(
    <article>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => removeIdea(id)}> remove me </button>
    </article>
  )
}

Card.propTypes = {
  removeIdea: PropTypes.func.isRequired,
  idea: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired
}


export default Card
