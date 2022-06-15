import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'


function NameForm(){

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [script, setScript] = useState('')
    const [countryOrigin, setCountryOrigin] = useState('')
    const [regionOrigin, setRegionOrigin] = useState('')
    // const [subRegionOrigin, setSubRegionOrigin] = useState('')
    // const [alternateCountries, setAlternateCountries] = useState('')

    // const { id } = useParams()

    

    const submitForm = (event) => {
        event.preventDefault()
        fetch(`https://v2.namsor.com/NamSorAPIv2/api2/json/origin/${firstName}/${lastName}/}`, {
            "method": "GET",
            "headers": {
              "Accept": "application/json",
              "X-API-KEY": "6393c516a966395d6360c9bd46716573"
            }
        })
        .then(response => {
            console.log(response.json())

        })
        .then((data) => {
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setCountryOrigin(data.countryOrigin)
            setRegionOrigin(data.regionOrigin)
            setScript(data.script)
            // setAlternateCountries(data.name.firstname.alternative_countries)
        })
        .catch(err => {
            console.error(err)
        })
        
        // {
        //     method: "GET",
        //     headers: {
        //         "Accept": "application/json",
        //         "X-API-KEY": "f8e993a1e866aa4b526c090c20462a39"
        //     }
            
        // })
    }


    return(
        <div>
             <h1 style={{textAlign: 'center'}}>Last Name Origin</h1>
            <form onSubmit={submitForm}>
                <fieldset>
                    <div style={{textAlign: 'center'}}>
                        <label> Enter Your First Name 
                            <br /><br />
                            <input 
                                required
                                type="text" 
                                name="firstName"
                                placeholder='First Name' 
                                defaultValue={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                        </label>
                        <br /><br />
                        <label> Enter Your Last Name 
                            <br /><br />
                            <input 
                                required
                                type="text"
                                name="lastName" 
                                placeholder='Last Name' 
                                defaultValue={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
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
                <tbody>
                <tr>
                    <td>First Name:</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Script:</td>
                    <td>{script}</td>
                </tr>
                <tr>
                    <td>Country Origin:</td>
                    <td>{countryOrigin}</td>
                </tr>
                <tr>
                    <td>Region Origin:</td>
                    <td>{regionOrigin}</td>
                </tr>
                {/* <tr>
                    <td>Sub Region Origin:</td>
                    <td>{subRegionOrigin}</td>
                </tr> */}
                 {/* <tr>
                    <td>Alternative Countries:</td>
                    <td>{alternateCountries}</td>
                </tr> */}
                </tbody>
            </table>
        </div>
    )



}

export default NameForm;

