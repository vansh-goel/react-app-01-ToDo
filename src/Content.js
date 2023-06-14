import React from 'react'
import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import Input from './Input'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      name : "Example" 
    },
    // {
    //   id: 2,
    //   checked : false,
    //   name : "Bread"
    // },
    // {
    //   id: 3,
    //   checked : false,
    //   name : "Chips"
    // }
  ]);
  
  const [lastItemId, setLastItemId] = useState(3);

  const addItem = (newItem) => {
    const newObject = {
      id: lastItemId + 1,
      checked: false,
      name: newItem
    }
    setItems([...items, newObject]);
    setLastItemId(lastItemId + 1);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  
  const handleDelete = (id) => {
    setRemoveCheck(id)
    setTimeout(() => {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
      localStorage.setItem('shoppinglist', JSON.stringify(updatedItems));
    }, 300);
  }

  const [removeCheck, setRemoveCheck] = useState(null);
  
      return (
        <main>
          <ul className='item-array'>
            <Input addItem={addItem} 
              type = "checkbox"
            />
            {items.map((item) => (
              <li key={item.id}
              className={removeCheck === item.id ? 'item item-removed' : 'item'}
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