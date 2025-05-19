import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex w-full min-w-screen flex-col items-center justify-center gap-10 p-20 *:w-max">
      <Link href="/css-filters">
        <button className="cursor-pointer rounded-lg bg-blue-500 px-6 py-3">CSS Filters</button>
      </Link>
      <Link href="/css-transition">
        <button className="cursor-pointer rounded-lg bg-blue-500 px-6 py-3">CSS Transition</button>
      </Link>
      <Link href="/css-transform-2d">
        <button className="cursor-pointer rounded-lg bg-blue-500 px-6 py-3">Transform 2D</button>
      </Link>
      <Link href="/css-transform-3d">
        <button className="cursor-pointer rounded-lg bg-blue-500 px-6 py-3">Transform 3D</button>
      </Link>
    </div>
  );
};

export default HomePage;
