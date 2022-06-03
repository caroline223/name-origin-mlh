import React from 'react'


function NameForm(){


    return(
        <div>
            <form>
                <fieldset>
                    <div style={{textAlign: 'center'}}>
                        <label> Type In Your Last Name 
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
        </div>
    )



}

export default NameForm;

