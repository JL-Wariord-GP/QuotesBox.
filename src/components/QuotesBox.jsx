import React from 'react'

const QuotesBox = ({quotesRandom, colorRandom, btnRandom, appStyle}) => {
    console.log(quotesRandom);
    console.log(colorRandom);
  return (
    <div>        
        <div className='box-son-h2-p-btn'>
            {
                //! Quotes & Icon
            }
            <div className='box-icon-h2' style={{color: colorRandom}}>
            <i className="fa-solid fa-quote-left icon-quote"></i>   
                <h2>{quotesRandom.quote}</h2>  
            </div>
            {
                //! Button
            }   
            <div className='box-son-p-btn' style={{color: colorRandom}}>
                <p>{quotesRandom.author}</p>
                <button className='btn'style={{backgroundColor: colorRandom}} onClick={() => {btnRandom() }} >{'>'}</button>
            </div>
        </div>
    </div>
  )
}

export default QuotesBox