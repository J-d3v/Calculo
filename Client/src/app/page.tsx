"use client";
import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState<string | null>(null);
  const [showOperations, setShowOperations] = useState(false);

  const handleOperationClick = (op: string) => {
    setOperation(op);
    setShowOperations(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded shadow-md w-96 text-black">
        <div className="flex space-x-4 mb-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Número 1"
            className="border p-2 rounded w-full text-black"
          />
          <div className="relative w-full">
            <button
              onClick={() => setShowOperations(!showOperations)}
              className="border p-2 rounded w-full text-left text-black"
            >
              {operation ? operation : 'Seleccionar operación'}
            </button>
            {showOperations && (
              <div className="absolute z-10 bg-white border rounded w-full mt-1">
                <button
                  onClick={() => handleOperationClick('+')}
                  className="block w-full text-left p-2 hover:bg-gray-100 text-black"
                >
                  + 
                </button>
                <button
                  onClick={() => handleOperationClick('-')}
                  className="block w-full text-left p-2 hover:bg-gray-100 text-black"
                >
                  - 
                </button>
                <button
                  onClick={() => handleOperationClick('*')}
                  className="block w-full text-left p-2 hover:bg-gray-100 text-black"
                >
                  * 
                </button>
                <button
                  onClick={() => handleOperationClick('/')}
                  className="block w-full text-left p-2 hover:bg-gray-100 text-black"
                >
                  / 
                </button>
              </div>
            )}
          </div>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Número 2"
            className="border p-2 rounded w-full text-black"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Calcular
        </button>
      </div>
    </div>
  );
}

export default Calculator;