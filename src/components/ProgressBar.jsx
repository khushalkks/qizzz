import React from 'react';

const ProgressBar = ({ current = 1, total = 5 }) => {
  const progress = Math.round((current / total) * 100);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1 text-sm text-gray-700 font-medium">
        <span>Question {current} of {total}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
