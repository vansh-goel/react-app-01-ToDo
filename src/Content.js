import React from 'react'
import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'


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
  
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  
  const handleDelete = (id) => {
    setRemovedItemId(id)
    setTimeout(() => {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
    }, 300);
  }
  
  const [removedItemId, setRemovedItemId] = useState(null);
      return (
        <main>
          <ul className='item-array'>
            {items.map((item) => (
              <li className="item" key={item.id}
              className={removedItemId === item.id ? 'item item-removed' : 'item'}
              >
                <input
                  type = "checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked = {item.checked}
                />
                  <label
                    style={(item.checked) ? {textDecoration:'line-through'} : null}
                    onDoubleClick = {() => handleCheck(item.id)}
                  >
                    {item.checked ? ( '‎ ' + item.name + '‎ ‎ ') : item.name }
                  </label>
                  <FaTrash
                    onClick={() => handleDelete(item.id)}
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