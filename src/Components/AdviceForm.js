import React, { useState } from 'react'


function AdviceForm(){

    const [randomAdvice, setRandomAdvice] = useState('')
    const [query, setSearchQuery] = useState('')

    

    const randomSubmit = () => {
            fetch("https://api.adviceslip.com/advice")
            
            .then((response) => {
                return response.json()
            })
            .then((completedData) => {
                console.log(completedData)
                setRandomAdvice(completedData.slip.advice)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const searchSubmit = (event) => {
            event.preventDefault()
            fetch(`https://api.adviceslip.com/advice/search/${query}`)
            .then((response) => {
                console.log(response.json()) 
            })
            .then(slips => {
                setSearchQuery(slips.advice)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return(
        <div>
             <h1 style={{textAlign: "center"}}>Advice Column</h1>
            <div>  
                    <h3>Click Below to Receive a Random Piece of Advice</h3>
                    <button onClick={randomSubmit} type="submit" >Try Me</button>
                    <p>{randomAdvice}</p>  
            </div>
            <div>
                <h3>Type a Word Below to Search for Advice</h3>
                <form onSubmit={searchSubmit}>
                    <input 
                        required
                        type="text"
                        defaultValue={query}
                    /> &nbsp;
                    <button type="submit">Results</button>
                </form>
                <p>{query}</p>
                
            </div>
            
        </div>
    )
}
export default AdviceForm;