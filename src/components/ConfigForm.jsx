import React from 'react';
import ColorInput from './ColorInput';
import FileUploader from './FileUploader';

const ConfigForm = ({ config, setConfig }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (name) => (newColor) => {
    setConfig((prev) => ({ ...prev, [name]: newColor }));
  };

  return (
    <form className='flex flex-col gap-4'>
      <div>
        <label className='block font-medium mb-1'>Config Name</label>
        <input
          type='text'
          name='configName'
          value={config.configName}
          onChange={handleChange}
          className='w-full px-3 py-2 border rounded'
        />
      </div>

      <div>
        <label className='block font-medium mb-1 mr-2'>Bot Name</label>
        <input
          type='text'
          name='botName'
          value={config.botName}
          onChange={handleChange}
          className='w-full px-3 py-2 border rounded'
        />
      </div>

      <div>
        <label className='block font-medium mb-1'>Font Family</label>
        <select
          name='fontFamily'
          value={config.fontFamily}
          onChange={handleChange}
          className='w-full px-3 py-2 border rounded'
        >
          <option value='Space Grotesk, sans-serif'>Space Grotesk</option>
          <option value='Arial, sans-serif'>Arial</option>
          <option value='Courier New, monospace'>Courier New</option>
        </select>
      </div>

      <ColorInput
        label='Header Color'
        value={config.headerColor}
        onChange={handleColorChange('headerColor')}
      />
      <ColorInput
        label='Header Font Color'
        value={config.headerFontColor}
        onChange={handleColorChange('headerFontColor')}
      />
      <ColorInput
        label='Background Color'
        value={config.backgroundColor}
        onChange={handleColorChange('backgroundColor')}
      />
      <ColorInput
        label='Chat Font Color'
        value={config.chatFontColor}
        onChange={handleColorChange('chatFontColor')}
      />

      <FileUploader
        label='Avatar Image'
        name='avatarImage'
        setConfig={setConfig}
      />
      <FileUploader
        label='Launcher Image'
        name='launcherImage'
        setConfig={setConfig}
      />
    </form>
  );
};

export default ConfigForm;
