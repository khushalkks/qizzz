import React, { useEffect, useState } from 'react';
import { TimerIcon } from 'lucide-react';

const Timer = ({ initialTime = 30, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeUp) onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-4">
      <TimerIcon className="w-5 h-5" />
      <span>{timeLeft}s left</span>
    </div>
  );
};

export default Timer;
