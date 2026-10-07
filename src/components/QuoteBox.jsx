import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomQuote, toggleFavorite } from "../redux/quoteSlice";

const QuoteBox = () => {
  const { current, favorites } = useSelector((state) => state.quotes);
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(current);

  const handleCopy = () => {
    navigator.clipboard.writeText(current);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-indigo-50 p-4 rounded-xl mb-4 text-center">
      <p className="text-gray-800 font-medium mb-4">"{current}"</p>
      <div className="flex justify-center gap-2 flex-col">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => dispatch(getRandomQuote())}
            className="flex-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition"
          >
            Інша нотатка
          </button>
          <button
            onClick={() => dispatch(toggleFavorite())}
            className={`flex-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              isFavorite
                ? "text-white bg-rose-500"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {isFavorite ? "В обраному ♥" : "В обране ♡"}
          </button>
        </div>
        <button
          onClick={handleCopy}
          className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition"
        >
          {copied ? "Скопійовано! ✓" : "Копіювати 📋"}
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
