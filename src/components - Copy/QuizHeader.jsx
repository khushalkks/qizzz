import React from 'react';
import { TimerIcon, BarChart3, BookOpenCheck, PlayCircle } from 'lucide-react';
import Lottie from 'lottie-react';
import quizAnimation from '../assets/quiz-boy.json';

const QuizHeader = ({ title, category, difficulty, time, showStartButton = false, onStart }) => (
  <div className="bg-blue-50 p-6 rounded-lg shadow mb-6 text-center">
    <div className="flex justify-center mb-2">
      <Lottie animationData={quizAnimation} loop className="w-24 h-24" />
    </div>
    <h1 className="text-3xl font-bold text-blue-800 mb-2">{title}</h1>
    <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-700 mb-4">
      <div className="flex items-center gap-2">
        <BookOpenCheck className="text-blue-600" size={18} />
        <span className="font-medium">Category:</span> {category}
      </div>
      <div className="flex items-center gap-2">
        <BarChart3 className="text-green-600" size={18} />
        <span className="font-medium">Difficulty:</span> {difficulty}
      </div>
      <div className="flex items-center gap-2">
        <TimerIcon className="text-red-600" size={18} />
        <span className="font-medium">Time:</span> {time}
      </div>
    </div>

    {/* Start Quiz Button */}
    {showStartButton && (
      <button
        onClick={onStart}
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition flex items-center gap-2 mx-auto"
      >
        <PlayCircle size={18} /> Start Quiz
      </button>
    )}
  </div>
);

export default QuizHeader;
