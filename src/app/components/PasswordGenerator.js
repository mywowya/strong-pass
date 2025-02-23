'use client';

import { useState } from 'react';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);

  const [includeLowerCase, setincludeLowerCase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeUpperCase, setIncludeUpperCase] = useState(true)
  const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(true)
  

  // Function to generate a random password
  const generatePassword = (length) => {
    let charset = '';
    if (includeLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecialCharacters) charset += '!@#$%^&*()_-+=<>?';

    let generatePass = '';

    if (charset === '') {
      generatePass = "Select one of the above"
      setPassword(generatePass);
      return;
    }

   
  

   

    for (let i = 0; i < length; i++) {
      generatePass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    if(!length || length <8 || length > 64){
      setLength(16)
      generatePass = "Your password length should be between 8 and 64"
    }

    setPassword(generatePass); // Set the generated password
  };


  const copyPass = () =>  {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-4 text-xl absolute inset-x-0 top-0">
      <h2 className="text-center text-2xl font-semibold md:underline :decoration-emerald-500 underline-offset-4">Strong Password Generator</h2>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="p-2 border text-black rounded-lg w-20 text-center"
        min="8"
        max="64"
      />

      <div className="text-center p-6  sm:flex space-x-4">
        <label>
            <input
                type="checkbox"
                checked = {includeLowerCase}
                onChange={() => setincludeLowerCase(!includeLowerCase) }
                className="mr-2"
            />Lowercase <br/>
            
        </label>

        <label>
            <input
                type="checkbox"
                checked = {includeUpperCase}
                onChange={() => setIncludeUpperCase(!includeUpperCase) }
                className="mr-2"
            />Uppercase<br/>
            
        </label>

        <label>
            <input
                type="checkbox"
                checked = {includeSpecialCharacters}
                onChange={() => setIncludeSpecialCharacters(!includeSpecialCharacters) }
                className="mr-2"
            />Special Characters <br/>
            
        </label>

        <label>
            <input
                type="checkbox"
                checked = {includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers) }
                className="mr-2"
            />Numbers
            
        </label>

      </div>

  

      <button
        onClick={() => generatePassword(length)} // Call generatePassword when clicked
        className="px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-700"
      >
        Generate Password
      </button>
      {password && (
        <div className="m-4 px-4 text-black bg-slate-200 rounded-lg ">
          <strong>Generated Password:</strong>
          <div className="mt-2 text-xl font-mono ">{password}</div>
        </div>
      )}
    <button
        onClick={copyPass}
        className="px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-700 active:bg-emerald-800 transition duration-150 ease-in-out"
      >
        Copy Password
      </button>
    </div>
  );
};

