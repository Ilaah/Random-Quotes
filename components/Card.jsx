import React from 'react'

const Card = ({quoteRandom, colorRandom, clickButton}) => {
    console.log(quoteRandom)
    console.log(colorRandom)
  return (
    <article className='card' style={{color: colorRandom}}>
        <p className='card__text'>{quoteRandom.quote}</p>
        <h3 className='card__author'>{quoteRandom.author}</h3>
        <button className='card__btn' 
             style={{background: colorRandom}} 
             onClick={clickButton}> <span>»</span> </button>
    </article>
  )
}

export default Card