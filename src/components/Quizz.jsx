import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCw } from 'lucide-react';
import UserInfo from '../components/UserInfo';
import QuizHeader from '../components/QuizHeader';
import ProgressBar from '../components/ProgressBar';
import InstructionBox from '../components/InstructionBox';
import Timer from '../components/Timer';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const questions = [
  { text: "What is the capital of France?", options: ["Paris", "Rome", "Madrid", "Berlin"], correct: "Paris" },
  { text: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: "Mars" },
  { text: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], correct: "JavaScript" },
  { text: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Dickens", "Tolstoy", "Homer"], correct: "Shakespeare" },
  { text: "What does CPU stand for?", options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Control Process Unit"], correct: "Central Processing Unit" },

  // 🧠 IT-related questions
  { text: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Markdown Language", "HyperTool Markup Language"], correct: "HyperText Markup Language" },
  { text: "Which company developed the Windows operating system?", options: ["Apple", "Google", "IBM", "Microsoft"], correct: "Microsoft" },
  { text: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Styling Syntax", "Color Style System"], correct: "Cascading Style Sheets" },
  { text: "Which of the following is a JavaScript framework?", options: ["Laravel", "Django", "React", "Flask"], correct: "React" },
  { text: "What does API stand for?", options: ["Application Programming Interface", "Advanced Programming Instruction", "Applied Protocol Interface", "Automated Programming Input"], correct: "Application Programming Interface" }
];


const Quizz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const { userName } = useUser(); // ✅ get name from context
  const navigate = useNavigate();

  const question = questions[currentIndex];

  const handleOptionClick = (option) => {
    if (!isSubmitted) setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setIsSubmitted(true);
      if (selectedOption === question.correct) {
        setScore(prev => prev + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleTimeUp = () => {
    if (!isSubmitted) setIsSubmitted(true);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCompleted(false);
    setScore(0);
  };

  const handleCertificate = () => {
    navigate('/completion-certificate', {
      state: {
        name: userName,
        score: `${score}/${questions.length}`,
        date: new Date().toLocaleDateString()
      }
    });
  };

  const getOptionClass = (option) => {
    if (!isSubmitted) {
      return selectedOption === option ? 'bg-blue-200 border-blue-600 scale-105' : 'hover:bg-blue-50';
    }
    if (option === question.correct) return 'bg-green-100 border-green-600';
    if (option === selectedOption) return 'bg-red-100 border-red-500';
    return 'opacity-60';
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-sky-100 via-purple-100 to-rose-100 px-4 py-10">
      <div className="w-full max-w-3xl p-8 rounded-xl shadow-2xl bg-white/80 backdrop-blur-md space-y-6">

        {/* ✅ Show user name */}
        <UserInfo name={userName} />

        <QuizHeader
          title="🧠 General Knowledge Quiz"
          category="Mixed"
          difficulty="Medium"
          time="30 sec / question"
        />
        <ProgressBar current={currentIndex + 1} total={questions.length} />
        <InstructionBox />
        {!isCompleted && <Timer initialTime={30} onTimeUp={handleTimeUp} />}

        {!isCompleted ? (
          <>
            <h2 className="text-2xl font-bold text-center">{question.text}</h2>
            <ul className="space-y-4">
              {question.options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all ${getOptionClass(option)}`}
                >
                  {option}
                </li>
              ))}
            </ul>

            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
              >
                Submit
              </button>
            ) : (
              <>
                <div className="mt-4 flex justify-center items-center gap-2 text-lg">
                  {selectedOption === question.correct ? (
                    <>
                      <CheckCircle className="text-green-500" />
                      <span className="text-green-700">Correct! 🎉</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="text-red-500" />
                      <span className="text-red-700">
                        Oops! Correct answer is <strong>{question.correct}</strong>.
                      </span>
                    </>
                  )}
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="w-full mt-6 py-3 bg-pink-600 text-white rounded-lg"
                >
                  {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              </>
            )}
          </>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-2xl text-green-700 font-bold">🎉 Quiz Completed!</p>
            <p className="text-lg">Your Score: <strong>{score}/{questions.length}</strong></p>

            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              <RotateCw /> Restart Quiz
            </button>
            <button
              onClick={handleCertificate}
              className="block mx-auto mt-4 px-6 py-3 bg-green-600 text-white rounded-lg"
            >
              🎓 Generate Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizz;
