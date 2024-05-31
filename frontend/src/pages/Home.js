// src/pages/Home.js

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../Animation.json';

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl text-center">Welcome to Skill App</h1>
      <div className="mx-auto max-w-full flex justify-center">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
};

export default Home;


