import React from 'react';
import { Info } from 'lucide-react';

const InstructionBox = () => {
  return (
    <div className="mb-6 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-md shadow-sm">
      <div className="flex items-center mb-2">
        <Info className="text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-blue-700">Instructions</h3>
      </div>
      <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
        <li>Read each question carefully before selecting an answer.</li>
        <li>You can only choose one option per question.</li>
        <li>Click "Submit" to lock your answer — it cannot be changed afterward.</li>
        <li>Points will be awarded for each correct answer.</li>
      </ul>
    </div>
  );
};

export default InstructionBox;
