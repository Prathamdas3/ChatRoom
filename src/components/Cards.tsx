import React from 'react';
export default function Card({ title, des }: Card) {
  return (
    <div className="card w-96 bg-base-100 max-w-sm mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-out h-60">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{des}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
