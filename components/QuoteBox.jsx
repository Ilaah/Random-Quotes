import React from 'react'

const QuoteBox = ({ quoteRandom, colorRandom }) => {

  return (
    <article className='quoteBox' style={{ color: colorRandom }}>
      <p className='quoteBox__text'>{quoteRandom.quote}</p>
      <h3 className='quoteBox__author'>{quoteRandom.author}</h3>
    </article>
  )
}

export default QuoteBox