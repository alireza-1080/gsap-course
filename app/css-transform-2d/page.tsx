import React from 'react';

const CssTransform2D = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center *:flex *:h-screen *:w-full *:flex-col *:items-center *:justify-center *:gap-20 text-5xl">
      <h1 className="text-9xl">Css Transform 2D 😎</h1>
      <div>
        <h2>No transform</h2>
        <div className='w-fit h-fit p-10 border-4 border-blue-500 bg-gray-900'>Normal div element</div>
      </div>
      <div>
        <h2>Rotate Z 12 degree</h2>
        <div className='w-fit h-fit p-10 border-4 border-blue-500 bg-gray-900 rotate-z-12'>Normal div element</div>
      </div>
      <div>
        <h2>Translate X -50%</h2>
        <div className='w-fit h-fit p-10 border-4 border-blue-500 bg-gray-900 -translate-x-1/2'>Normal div element</div>
      </div>
      <div>
        <h2>Scale X 150%</h2>
        <div className='w-fit h-fit p-10 border-4 border-blue-500 bg-gray-900 scale-x-150'>Normal div element</div>
      </div>
      <div>
        <h2>Scale Y 150%</h2>
        <div className='w-fit h-fit p-10 border-4 border-blue-500 bg-gray-900 scale-y-150'>Normal div element</div>
      </div>
      <div>
        <h2>Scale 150%</h2>
        <div className='w-fit h-fit p-10 border-4 border-blue-500 bg-gray-900 scale-150'>Normal div element</div>
      </div>
      <div>
        <h2>Skew X 12 deg</h2>
        <div className='w-fit h-fit p-10 border-4 border-blue-500 bg-gray-900 skew-x-12'>Normal div element</div>
      </div>
      <div>
        <h2>Skew Y 12 deg</h2>
        <div className='w-fit h-fit p-10 border-4 border-blue-500 bg-gray-900 skew-y-12'>Normal div element</div>
      </div>
      <div>
        <h2>Skew 12 deg</h2>
        <div className='w-fit h-fit p-10 border-4 border-blue-500 bg-gray-900 skew-12'>Normal div element</div>
      </div>
    </div>
  );
};

export default CssTransform2D;
