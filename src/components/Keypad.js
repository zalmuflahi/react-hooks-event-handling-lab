// Code Keypad Component Here
import React from 'react';

function Keypad (){
    function handleChange(e) {
       
        console.log("Entering password...");
        // console.log(e.target);
      }
    
      return (
        <div>
          <input
            type="password"
            name="pin"
            onChange={handleChange}
            placeholder="Enter password..."
          />
        </div>
      );
    }
export default Keypad;