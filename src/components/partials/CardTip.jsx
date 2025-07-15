import React from 'react'

const CardTip = ({num, title, description}) => {
  return (
    <>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="text-green-600 text-4xl font-bold mb-4">{num}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">
         {description}
        </p>
      </div>
    </>
  );
}

export default CardTip
