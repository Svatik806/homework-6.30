import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.quotes.favorites);
  if (favorites.length === 0) return null;

  return (
    <div className="border-t pt-3">
      <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Обране</p>
      <ul className="space-y-1">
        {favorites.map((quote, index) => (
          <li
            key={index}
            className="text-xs text-gray-600 bg-gray-50 p-2 rounded border"
          >
            "{quote}"
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
