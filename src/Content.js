import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      name : "Cocoa Almonds" 
    },
    {
      id: 2,
      checked : false,
      name : "Bread"
    },
    {
      id: 3,
      checked : false,
      name : "Chips"
    }
  ]);
    
      return (
        <main>
          <ul className='item-array'>
            {items.map((item) => (
              <li className="item">
                <input
                  type = "checkbox"
                  checked = {item.checked}
                />
                <label>{item.name}</label>
                <FaTrashAlt 
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