import { useState } from 'react'
import './App.css'
import quotes from '../json/quotes.json'
import Card from '../components/Card'

const arrayColors = [
  '#3FA157','#9FFFAF','#6C9026',
  '#655045','#C3A913','#AE8305',
  '#9F14B0','#C0A8DB','#EB395C',
  '#8FE528','#6C1167','#BFA0A6',
  '#E96308','#FE2743','#58258D',
  '#1D0521','#CB76F3','#353DCF',
  '#FFACCA','#17B16F','#B1F6AD',
  '#E797A5','#A64E2C','#97E352',
  '#2DBD90','#121BE5','#73A9C2',
  '#C6C2EE','#8D3202','#F52981'
]

function App() {
  // console.log (quotes.length)
  const randomNumber = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getElementRandom = array => {
    const i = randomNumber(array)
    return array[i]
  }

  let randomIndexQuotes = randomNumber(quotes)
  let randomIndexColors = randomNumber(arrayColors)

  const [quoteRandom, setQuoteRandom] = useState(getElementRandom(quotes))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))

  const clickButton = () => {
    setQuoteRandom(getElementRandom(quotes))
    setColorRandom(getElementRandom(arrayColors))
  }

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={appStyle}>
      <Card
        quoteRandom={quoteRandom}
        colorRandom={colorRandom}
        getElementRandom={getElementRandom}
        quotes={quotes}
        arrayColors={arrayColors}
        clickButton={clickButton}
      />
    </div>
  )
}

export default App