import React, { useState } from 'react';

const ColorInput = ({ label, value, onChange }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (e) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
      setShowColorPicker(false);
    } else {
      console.error('onChange is not a function');
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <label className='text-sm font-medium'>{label}</label>
      <div className='relative'>
        <input
          type='text'
          value={value}
          onChange={(e) => {
            if (typeof onChange === 'function') {
              onChange(e.target.value);
            } else {
              console.error('onChange is not a function');
            }
          }}
          className='w-full px-4 py-2 border rounded-lg focus:outline-none'
        />

        <div
          className='absolute right-2 top-2 w-6 h-6 rounded-full border cursor-pointer'
          style={{ backgroundColor: value }}
          onClick={() => setShowColorPicker(!showColorPicker)}
        ></div>

        {showColorPicker && (
          <input
            type='color'
            value={value}
            onChange={handleColorChange}
            className='absolute right-2 top-12 w-10 h-10 opacity-0 cursor-pointer'
          />
        )}
      </div>
    </div>
  );
};

export default ColorInput;
