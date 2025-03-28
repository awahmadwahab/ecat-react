import React, { useState } from "react";

function AggregateCalculator() {
  const [matric1, setMatric1] = useState("");
  const [matric2, setMatric2] = useState("");
  const [inter1, setInter1] = useState("");
  const [inter2, setInter2] = useState("");
  const [entryTest, setEntryTest] = useState("");
  
  // States for group results
  const [group1, setGroup1] = useState("");
  const [group2, setGroup2] = useState("");
  const [group3, setGroup3] = useState("");

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
    calculateGroup1();
    calculateGroup2();
    calculateGroup3();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen p-4">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
        <h1 className="text-2xl font-bold text-green-700 text-center mb-6">
         ECAT Aggregate Calculator
        </h1>

        {/* Matric Marks Input */}
        <InputField
          label="Matric Marks"
          id="matric1"
          value={matric1}
          onChange={(e) => setMatric1(e.target.value)}
          placeholder="Enter obtained Marks"
        />
        <InputField
          id="matric2"
          value={matric2}
          onChange={(e) => setMatric2(e.target.value)}
          placeholder="Enter Total Marks"
        />

        {/* Intermediate Marks Input */}
        <InputField
          label="Intermediate Marks"
          id="inter1"
          value={inter1}
          onChange={(e) => setInter1(e.target.value)}
          placeholder="Enter obtained Marks"
        />

        <InputField
          id="inter2"
          value={inter2}
          onChange={(e) => setInter2(e.target.value)}
          placeholder="Enter Total Marks"
        />


        <InputField
          label="Entry Test Marks (out of 400)"
          id="entryTest"
          value={entryTest}
          onChange={(e) => setEntryTest(e.target.value)}
          placeholder="Enter obtained Marks"
        />


        <div className="mt-6 flex justify-center">
          <button
            onClick={handleCalculate}
            className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700 focus:outline-none">
            Calculate 
          </button>
        </div>

       
        <div className="mt-8">
          {group1 && <div className="text-xl text-blue-600">Group 1: {group1}</div>}
          {group2 && <div className="text-xl text-green-600">Group 2: {group2}</div>}
          {group3 && <div className="text-xl text-red-600">Group 3: {group3}</div>}
        </div>
      </div>
    </div>
  );
}


const InputField = ({ label, id, value, onChange, placeholder }) => {
  return (
    <div className="mt-4">
      <label htmlFor={id} className="text-green-600 block text-lg mb-2">{label}</label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-gray-50"
      />
    </div>
  );
};

export default AggregateCalculator;
