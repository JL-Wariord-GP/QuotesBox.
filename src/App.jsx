import { useState } from 'react'
import './App.css'
import QuotesBox from './components/QuotesBox'
import colors from './utils/colors'
import quotes from './json/quotes.json'

function App() {
  const [quotesRandom, setQuotesRandom] = useState(getRandomQuotes(quotes))
  const [colorRandom, setColorRandom] = useState(getRandomColors(colors))

  {
    //! Quotes Random
  }
  function getRandomQuotes() {
    for (let i = 0; i < quotes.length;) {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
  }
  {
    //! Quotes Colors
  }
  function getRandomColors() {
    for (let i = 0; i < colors.length;) {
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
  {
    //! Select Random - Btn
  }
  const btnRandom = () => {
    setQuotesRandom(getRandomQuotes(quotes))
    setColorRandom(getRandomColors(colors))
  }
  {
    //! Colors All Box
  }
  const appStyle = {
    backgroundColor: colorRandom
  }
 
  return (
    <div className="App" style={appStyle}>
      <QuotesBox 
      quotesRandom={quotesRandom}
      colorRandom={colorRandom}
      btnRandom={btnRandom}
      appStyle={appStyle}
      />
      <footer>
      <div className="box__copyright">
        <p className="footer-copyright__pie" style={{color: colorRandom}}>Copyright &copy; 2022 Todos los Derechos Reservados.</p>
        <p className="footer-copyright__pie" style={{color: colorRandom}} >Desarrollado por Jorge Gomez</p>
      </div>
      </footer>
    </div>
  )
}

export default App
