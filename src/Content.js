import React from 'react'
import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      name : "Cocoa Almonds" 
    },
    {
      id: 2,
      checked : false,
      name : "Bread"
    },
    {
      id: 3,
      checked : true,
      name : "Chips"
    }
  ]);
    
      return (
        <main>
          <ul className='item-array'>
            {items.map((item) => (
              <li className="item" key={item.id}>
                <input
                  type = "checkbox"
                  checked = {item.checked}
                />
                  <label>{item.name}</label>
                  <FaTrash 
                    id = "button"
                    role = "button"
                    tabIndex = "0"
                  />
              </li>
            ))}
          </ul>
        </main>
        )
    }
export default Content