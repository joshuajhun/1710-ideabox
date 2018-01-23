import React from 'react'
import Card from '../Card/Card'
import PropTypes from 'prop-types'

const CardContainer = ({ ideas, removeIdea }) => {
  const renderedCards = ideas.map((idea) =>
      <Card   idea={idea}
              removeIdea={removeIdea}
              key={idea.id}/>)
  return (
    <div>
      {renderedCards}
    </div>
  )
}

CardContainer.propTypes = {
  ideas: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
  removeIdea: PropTypes.func.isRequired
}

export default CardContainer
