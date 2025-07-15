import React from "react";

const CardSkill = ({ svg, title, description }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
          {svg}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
};

export default CardSkill;
