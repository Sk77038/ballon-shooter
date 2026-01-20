import React from 'react';
import { Delete, Eraser } from 'lucide-react';

interface KeypadProps {
  onInput: (num: number) => void;
  onClear: () => void;
  onBackspace: () => void;
  currentInput: string;
}

const Keypad: React.FC<KeypadProps> = ({ onInput, onClear, onBackspace, currentInput }) => {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="bg-white/90 backdrop-blur-md p-3 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] w-full max-w-md mx-auto">
      {/* Display Area */}
      <div className="mb-3 bg-gray-100 rounded-xl p-3 flex justify-between items-center h-14 border-2 border-gray-200">
        <span className="text-gray-500 font-medium">Answer:</span>
        <span className="text-3xl font-bold text-gray-800 tracking-widest">{currentInput}</span>
      </div>

      {/* Keys Grid */}
      <div className="grid grid-cols-4 gap-2">
        {/* Numbers 1-9 */}
        {[1, 2, 3].map((num) => (
          <KeyButton key={num} onClick={() => onInput(num)} label={num.toString()} />
        ))}
        <button 
           onClick={onBackspace}
           className="bg-red-100 active:bg-red-200 text-red-600 rounded-xl font-bold text-xl shadow-sm border-b-4 border-red-200 active:border-b-0 active:translate-y-1 transition-all h-14 flex items-center justify-center"
        >
          <Delete size={24} />
        </button>

        {[4, 5, 6].map((num) => (
          <KeyButton key={num} onClick={() => onInput(num)} label={num.toString()} />
        ))}
         <button 
           onClick={onClear}
           className="bg-orange-100 active:bg-orange-200 text-orange-600 rounded-xl font-bold text-xl shadow-sm border-b-4 border-orange-200 active:border-b-0 active:translate-y-1 transition-all h-14 flex items-center justify-center row-span-2"
        >
          <Eraser size={24} />
        </button>

        {[7, 8, 9].map((num) => (
          <KeyButton key={num} onClick={() => onInput(num)} label={num.toString()} />
        ))}
        
        {/* Zero centered in the last available spot in grid logic, adjusted for row span */}
        <div className="col-start-2">
            <KeyButton key={0} onClick={() => onInput(0)} label="0" />
        </div>
      </div>
    </div>
  );
};

interface KeyButtonProps {
  onClick: () => void;
  label: string;
}

const KeyButton: React.FC<KeyButtonProps> = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="bg-blue-50 active:bg-blue-200 text-blue-800 rounded-xl font-bold text-2xl shadow-sm border-b-4 border-blue-200 active:border-b-0 active:translate-y-1 transition-all h-14"
  >
    {label}
  </button>
);

export default Keypad;