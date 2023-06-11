import React from 'react'
import { useState } from 'react'

const Content = () => {
  const [name, setName] = useState('Dave');

    const handleName = () => {
        const names = ["James", "Jonathan", "Jack"]
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }
    
    
      const handleClick = () => {
        alert("You clicked it");
      }

      const handleClick2 = (eventH) => {
        console.log(eventH);
      }
    
      return (
        <main>
              <p>
                Hello World!
                <br/>
                Also Hello {name}!
                <br/>
              <button onClick={ handleClick }>Click here</button> 
              <button onClick={ handleName }>Change Name</button> 
              </p>
          </main>
        )
    }
export default Content