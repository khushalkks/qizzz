import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import QuizHeader from '../components/QuizHeader';
import { PlayCircle } from 'lucide-react';

const StartQuiz = () => {
  const [name, setName] = useState('');
  const { setUserName } = useUser();     // ✅ Using context
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      setUserName(name);                 // ✅ Save name globally
      navigate('/quiz');                 // ✅ Navigate to quiz
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-indigo-50 p-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4"
        />

        <QuizHeader
          title="🎯 Get Ready to Test Your Knowledge!"
          category="General"
          difficulty="Medium"
          time="30 sec / question"
        />

        <button
          onClick={handleStart}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition flex items-center gap-2 mx-auto"
        >
          <PlayCircle size={20} />
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartQuiz;
