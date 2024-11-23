import React, { useState } from 'react';
import ConfigForm from './components/ConfigForm';
import LivePreview from './components/LivePreview';
import { downloadJSON } from './utils/fileHandler';
import './index.css';

const App = () => {
  const [config, setConfig] = useState({
    configName: 'config-1',
    botName: 'Greebo',
    fontFamily: 'Space Grotesk, sans-serif',
    headerColor: '#E63A1E',
    headerFontColor: '#FFFFFF',
    backgroundColor: '#E8E1DB',
    chatFontColor: '#323130',
    avatarImage: '',
    launcherImage: '',
  });

  const handleDownload = () => {
    downloadJSON(config, config.configName);
  };

  return (
    <div className='flex flex-col lg:flex-row lg:gap-6 w-screen bg-gray-100 min-h-screen'>
      <div className='w-full lg:w-1/2 bg-gray-100 pt-6 pl-6 pb-6 rounded'>
        <button className='bg-black text-white px-4 py-2 rounded mb-6'>
          Load Config
        </button>
        <ConfigForm config={config} setConfig={setConfig} />
      </div>
      <div
        className='w-full lg:w-1/2 flex flex-col items-center shadow-md'
        style={{ backgroundColor: config.backgroundColor }}
      >
        <div className='flex items-center mb-4 pt-4'>
          <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          <h2 className='text-xl font-bold pl-1'>Live Preview</h2>
        </div>
        <LivePreview config={config} />
        <button
          className='mt-6 bg-black text-white py-2 px-6 rounded-lg'
          onClick={handleDownload}
        >
          Download Config
        </button>
        <p className='pb-10'>{config.configName}.json</p>
      </div>
    </div>
  );
};

export default App;
