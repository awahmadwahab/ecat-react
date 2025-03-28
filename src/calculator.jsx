import React, { useState, useRef } from "react";
import { Helmet } from 'react-helmet';


function AggregateCalculator() {
    <Helmet>
        <title>ECAT Aggregate Calculator</title>
        <meta name="description" content="Calculate your UET Lahore Entry Test - ECAT aggregate score based on Matric, Intermediate, and Entry Test scores." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="UET Entry Test -ECAT Aggregate Calculator" />
        <meta property="og:description" content="Use this calculator to determine your UET Entry Test - ECAT aggregate score." />
        <meta property="og:url" content="https://awxvision.vercel.app" />
      </Helmet>

  const [matric1, setMatric1] = useState("");
  const [matric2, setMatric2] = useState("");
  const [inter1, setInter1] = useState("");
  const [inter2, setInter2] = useState("");
  const [entryTest, setEntryTest] = useState("");
  
  // States for group results
  const [group1, setGroup1] = useState("");
  const [group2, setGroup2] = useState("");
  const [group3, setGroup3] = useState("");

  // Reference for results section
  const resultsRef = useRef(null);

  // Function to calculate Group 1
  const calculateGroup1 = () => {
    const r1 = (parseFloat(matric1) / parseFloat(matric2)) * 17;
    const r2 = (parseFloat(inter1) / parseFloat(inter2)) * 50;
    const r3 = (parseFloat(entryTest) / 400) * 33;
    const result = r1 + r2 + r3;
    setGroup1(result.toFixed(3));
  };

  // Function to calculate Group 2
  const calculateGroup2 = () => {
    const r1 = (parseFloat(matric1) / parseFloat(matric2)) * 25;
    const r2 = (parseFloat(inter1) / parseFloat(inter2)) * 45;
    const r3 = (parseFloat(entryTest) / 400) * 30;
    const result = r1 + r2 + r3;
    setGroup2(result.toFixed(3));
  };

  // Function to calculate Group 3
  const calculateGroup3 = () => {
    const r1 = (parseFloat(matric1) / parseFloat(matric2)) * 30;
    const r2 = (parseFloat(inter1) / parseFloat(inter2)) * 70;
    const result = r1 + r2;
    setGroup3(result.toFixed(3));
  };

  // Handler to calculate all groups
  const handleCalculate = () => {
    if (!matric1 || !matric2 || !inter1 || !inter2 || !entryTest) {
      alert("Please fill in all fields.");
      return;
    }
    calculateGroup1();
    calculateGroup2();
    calculateGroup3();
  
  
    // Give a short delay to ensure results are rendered before scrolling
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-2 sm:p-2">
      <div className="w-full max-w-sm sm:max-w-lg p-4 sm:p-8 bg-white shadow-2xl rounded-xl border border-gray-100">
        <div className="text-center text-xs sm:text-sm text-gray-500 mb-2">
          <p>AW X DEV</p>
        </div>
        
        <h1 className="text-xl sm:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4 sm:mb-6">
          ECAT Aggregate Calculator
        </h1>
        
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-1 sm:mb-2">Matric Details</h2>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <InputField
              
                id="matric1"
                value={matric1}
                onChange={(e) => setMatric1(e.target.value)}
                placeholder="Obtained"
              />
              <InputField
               
                id="matric2"
                value={matric2}
                onChange={(e) => setMatric2(e.target.value)}
                placeholder="Total"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-1 sm:mb-2 mt-2 sm:mt-4">Intermediate Details</h2>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <InputField
               
                id="inter1"
                value={inter1}
                onChange={(e) => setInter1(e.target.value)}
                placeholder="Obtained"
              />
              <InputField
             
                id="inter2"
                value={inter2}
                onChange={(e) => setInter2(e.target.value)}
                placeholder="Total"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-1 sm:mb-2 mt-2 sm:mt-4">Entry Test</h2>
            <InputField
              label="Score (out of 400)"
              id="entryTest"
              value={entryTest}
              onChange={(e) => setEntryTest(e.target.value)}
              placeholder="Obtained Marks"
            />
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            onClick={handleCalculate}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 focus:outline-none active:scale-95 text-sm sm:text-base">
            Calculate Aggregate
          </button>
        </div>

        {(group1 || group2 || group3) && (
          <div ref={resultsRef} className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">Aggregate Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {group1 && (
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Group 1</p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">{group1}%</p>
                </div>
              )}
              {group2 && (
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md border-l-4 border-green-500">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Group 2</p>
                  <p className="text-xl sm:text-2xl font-bold text-green-600">{group2}%</p>
                </div>
              )}
              {group3 && (
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md border-l-4 border-red-500">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Group 3</p>
                  <p className="text-xl sm:text-2xl font-bold text-red-600">{group3}%</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-500">
        <p>© 2023 ECAT Aggregate Calculator | <a href="https://wa.me/+923426084562" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-green-600 transition-colors">AW X DEV</a></p>
      </div>
    </div>
  );
}

const InputField = ({ label, id, value, onChange, placeholder }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 sm:p-3 bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 appearance-none"
        inputMode="numeric"
      />
    </div>
  );
};

export default AggregateCalculator;
