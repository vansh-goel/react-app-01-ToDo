import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import Input from './Input'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      name : "Example" 
    }
  ]);
  
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('todolist'));
    if (storedItems && storedItems.length > 0) {
      setItems(storedItems);
      const lastItem = storedItems[storedItems.length - 1];
      setLastItemId(lastItem.id);
    }
  }, []);

  const [lastItemId, setLastItemId] = useState(3);

  const addItem = (newItem) => {
    const newObject = {
      id: lastItemId + 1,
      checked: false,
      name: newItem
    }
    const updatedItems = [...items, newObject];
    setItems(updatedItems)
    setLastItemId(lastItemId + 1);
    localStorage.setItem('todolist', JSON.stringify(updatedItems));
  };

  const handleCheck = (id) => {
    const updatedItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
    setItems(updatedItems)
    localStorage.setItem('todolist', JSON.stringify(updatedItems));
  }

  const popIt = new Audio("/pop.mp3");
  
  const handleDelete = (id) => {
    popIt.play()
    setRemoveCheck(id)
    setTimeout(() => {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
      localStorage.setItem('todolist', JSON.stringify(updatedItems));
    }, 200);
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