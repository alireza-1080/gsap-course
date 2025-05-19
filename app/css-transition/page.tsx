import React from 'react';

const CssTransitions = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center text-5xl *:flex *:h-screen *:w-full *:flex-col *:items-center *:justify-center *:gap-10 *:overflow-hidden">
      <h1 className="!text-9xl">Css Transitions 😊</h1>
      <div className="group text-2xl *:flex *:items-center *:justify-center">
        <div className='flex gap-5 -translate-x-[500px]'>
        <div className="w-40">
          Linear:
        </div>
          <div className="relative h-16 w-48 origin-left bg-gradient-to-br from-violet-500 to-sky-500 transition-transform duration-3000 ease-linear group-hover:scale-x-[600%]"></div>
        </div>
        <div className='flex gap-5 -translate-x-[500px]'>
        <div className="w-40">
          Ease:
        </div>
          <div className="relative h-16 w-48 origin-left bg-gradient-to-br from-violet-500 to-sky-500 transition-transform duration-3000 ease-initial group-hover:scale-x-[600%]"></div>
        </div>
        <div className='flex gap-5 -translate-x-[500px]'>
        <div className="w-40">
          Ease-in:
        </div>
          <div className="relative h-16 w-48 origin-left bg-gradient-to-br from-violet-500 to-sky-500 transition-transform duration-3000 ease-in group-hover:scale-x-[600%]"></div>
        </div>
        <div className='flex gap-5 -translate-x-[500px]'>
        <div className="w-40">
          Ease-out:
        </div>
          <div className="relative h-16 w-48 origin-left bg-gradient-to-br from-violet-500 to-sky-500 transition-transform duration-3000 ease-out group-hover:scale-x-[600%]"></div>
        </div>
        <div className='flex gap-5 -translate-x-[500px]'>
        <div className="w-40">
          Ease-in-out:
        </div>
          <div className="relative h-16 w-48 origin-left bg-gradient-to-br from-violet-500 to-sky-500 transition-transform duration-3000 ease-in-out group-hover:scale-x-[600%]"></div>
        </div>
        <div className='flex gap-5 -translate-x-[500px]'>
        <div className="w-40">
          Step(5):
        </div>
          <div className="relative h-16 w-48 origin-left bg-gradient-to-br from-violet-500 to-sky-500 transition-transform duration-3000 ease-[steps(5)] group-hover:scale-x-[600%]"></div>
        </div>
      </div>
    </div>
  );
};

export default CssTransitions;
