import React from 'react';

const LivePreview = ({ config }) => {
  const {
    botName,
    fontFamily,
    headerColor,
    headerFontColor,
    backgroundColor,
    chatFontColor,
    avatarImage,
    launcherImage,
  } = config;

  return (
    <div
      className='flex justify-center items-center w-full h-full'
      style={{ backgroundColor: config.backgroundColor }}
    >
      <div className='relative w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col'>
        <div
          className='flex items-center justify-between px-4 py-3 rounded-t-2xl'
          style={{ backgroundColor: headerColor, color: headerFontColor }}
        >
          <span className='text-lg font-semibold'>{botName}</span>
          <button className='text-lg font-bold'>&times;</button>
        </div>

        <div
          className='flex-1 px-4 py-6 flex items-start gap-4'
          style={{
            backgroundColor,
            color: chatFontColor,
            fontFamily,
          }}
        >
          {avatarImage && (
            <img
              src={avatarImage}
              alt='Avatar'
              className='w-12 h-12 rounded-full flex-shrink-0'
            />
          )}
          <p className='text-sm'>
            Hi! I'm {botName}, your friendly concierge monster, here to answer
            questions, show you around, and automatically perform tasks on the
            site for you. How can I help?
          </p>
        </div>

        <div className='px-4 py-3 text-sm text-gray-600 border-t'>
          Need help? Just type or say it
        </div>

        {launcherImage && (
          <img
            src={launcherImage}
            alt='Launcher'
            className='absolute -bottom-10 right-4 w-20 h-20 rounded-full border-4 border-white'
          />
        )}
      </div>
    </div>
  );
};

export default LivePreview;
