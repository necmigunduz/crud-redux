import React from "react";

const TextField = ({ label, id, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 text-base text-gray-800 font-bold">{label}</label>
      <input name={id} placeholder={placeholder} className="bg-gray-200 px-6 border-8 outline-none rounded-3xl" required/>
    </div>
  );
};

export default TextField;
