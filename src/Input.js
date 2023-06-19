import React, { useState } from 'react';

const bgMusic = new Audio('/bgMusic.mp3') 
bgMusic.loop = true
const Input = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      addItem(newItem);
      setNewItem('');
    }
  };

  const handleKeyDown = (e) => {
    bgMusic.play()
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