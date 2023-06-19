import React, { useState } from 'react';
const Input = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      addItem(newItem);
      setNewItem('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleAddItem()
    }
  }

  return (
    <div className='inp'>
      <input
        id="input-button" 
        onKeyDown={handleKeyDown}
        placeholder='Enter list item'
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
    </div>
  );
};

export default Input;