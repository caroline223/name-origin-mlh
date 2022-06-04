import React, { useState } from 'react'


function NameForm(){

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    // const [countryOrigin, setCountryOrigin] = useState('')
    // const [regionOrigin, setRegionOrigin] = useState('')
    // const [subRegionOrigin, setSubRegionOrigin] = useState('')


    const submitForm = (event) => {
        event.preventDefault()
        
    }


    return(
        <div>
            <form>
                <fieldset>
                    <div style={{textAlign: 'center'}}>
                        <label> Enter Your First Name 
                            <br /><br />
                            <input type="text" placeholder='First Name'/>
                        </label>
                        <br /><br />
                        <label> Enter Your Last Name 
                            <br /><br />
                            <input type="text" placeholder='Last Name'/>
                        </label>
                    </div> 
                </fieldset>
                <br />
                <div style={{textAlign: 'center'}}>
                     <button type="submit">Submit</button>
                </div>
            </form>
            <h2 style={{textAlign: 'center'}}>Results</h2>
            <table>
                <tr>
                    <td>First Name:</td>
                    <td>{firstName}</td>
                </tr>
                <br />
                <tr>
                    <td>Last Name:</td>
                    <td>{lastName}</td>
                </tr>
                <br />
                <tr>
                    <td>Country Origin:</td>
                    {/* <td>{countryOrigin}</td> */}
                </tr>
                <br />
                <tr>
                    <td>Region Origin:</td>
                    {/* <td>{regionOrigin}</td> */}
                </tr>
                <br />
                <tr>
                    <td>Sub Region Origin:</td>
                    {/* <td>{subRegionOrigin}</td> */}
                </tr>
                <br />
            </table>
        </div>
    )



}

export default NameForm;

