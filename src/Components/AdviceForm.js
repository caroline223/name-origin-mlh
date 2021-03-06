import React, { useState, useRef } from 'react'


function AdviceForm(){

    const [randomAdvice, setRandomAdvice] = useState('')
    const [query, setSearchQuery] = useState('')
    const [message, setMessage] = useState('')

    const queryInput = useRef()
    
    
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

    const searchSubmit = () => {

        const query = queryInput.current.value 
        // if (query !== ''){
        //     setSearchQuery(query)
        // }
            fetch(`https://api.adviceslip.com/advice/search/${query}`)
            .then((response) => {
                return response.json()
            })
            .then((completedData) => {
                console.log(completedData)
                completedData ? setSearchQuery(completedData.slips[0].advice) : setMessage(completedData.message.text)
                
                // if(completedData === true){
                //     setSearchQuery(completedData.slips[0].advice)
                // }
                // else{
                //     setMessage(completedData.message.text)
                // }
            } )
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
                    <p style={{textAlign: 'center'}}>{randomAdvice}</p>  
            </div>
            <div>
                <h3>Type a Word Below to Search for Advice</h3>
                <div>
                    <input
                        ref={queryInput} 
                        required
                        type="text"
                    /> &nbsp;
                    <button  onClick={searchSubmit} type="submit">Results</button>
                </div>
                <p style={{textAlign: 'center'}}>{query ? query : message}</p>
                
            </div>
            
        </div>
    )
}
export default AdviceForm;

//need to add ternary operator for when a search query does not exist