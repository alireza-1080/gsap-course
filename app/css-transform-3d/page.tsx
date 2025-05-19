import React from 'react';

const CssTransform3d = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center text-5xl *:flex *:h-screen *:w-full *:flex-col *:items-center *:justify-center *:gap-10">
      <h1 className="text-9xl">Css Transform 3D 😍</h1>
      <div>
        <h2>No transform</h2>
        <div className="h-fit w-fit border-4 border-blue-500 bg-gray-900 p-10">Normal div element</div>
      </div>
      <div>
        <h2>Hover: Rotate Z 45 deg</h2>
        <div className="h-fit w-fit border-4 border-blue-500 bg-gray-900 p-10 duration-500 perspective-near hover:rotate-z-45">Normal div element</div>
      </div>
      <div>
        <h2>Hover: Rotate Y 45 deg</h2>
        <div className="h-fit w-fit border-4 border-blue-500 bg-gray-900 p-10 duration-500 perspective-near hover:rotate-y-45">Normal div element</div>
      </div>
      <div className='perspective-midrange'>
        <h2>Hover: Rotate X 45 deg</h2>
        <div className="h-fit w-fit border-4 border-blue-500 bg-gray-900 p-10 duration-500 hover:rotate-x-45">Normal div element</div>
      </div>
      <div className='perspective-midrange'>
        <h2>Hover: Rotate X Y Z 45 deg</h2>
        <div className="h-fit w-fit border-4 border-blue-500 bg-gray-900 p-10 duration-500 hover:rotate-x-45 hover:rotate-y-45 hover:rotate-z-45">
          Normal div element
        </div>
      </div>
      <div className='perspective-midrange'>
        <h2>Hover: Translate X 288px</h2>
        <div className="h-fit w-fit border-4 border-blue-500 bg-gray-900 p-10 duration-500 hover:translate-x-72">
          Normal div element
        </div>
      </div>
      <div className='perspective-midrange'>
        <h2>Hover: Translate Y 96px</h2>
        <div className="h-fit w-fit border-4 border-blue-500 bg-gray-900 p-10 duration-500 hover:translate-y-24">
          Normal div element
        </div>
      </div>
      <div className='perspective-midrange'>
        <h2>Hover: Translate z 192px</h2>
        <div className="h-fit w-fit border-4 border-blue-500 bg-gray-900 p-10 duration-500 hover:translate-z-48">
          Normal div element
        </div>
      </div>
    </div>
  );
};

export default CssTransform3d;
