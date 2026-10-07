import { createSlice } from "@reduxjs/toolkit";

const initialQuotes = [
  "Життя — це те, що з тобою відбувається, поки ти будуєш плани.",
  "Найкращий спосіб передбачити майбутнє — створити його.",
  "Будь собою, всі інші ролі вже зайняті.",
  "Ніколи не пізно стати тим, ким ти міг би бути.",
  "Успіх — це здатність іти від невдачі до невдачі, не втрачаючи ентузіазму.",
];

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    current: initialQuotes[0],
    favorites: [],
  },
  reducers: {
    getRandomQuote: (state) => {
      const index = Math.floor(Math.random() * initialQuotes.length);
      state.current = initialQuotes[index];
    },
    toggleFavorite: (state) => {
      const exists = state.favorites.includes(state.current);
      if (exists) {
        state.favorites = state.favorites.filter(
          (quote) => quote !== state.current
        );
      } else {
        state.favorites.push(state.current);
      }
    },
  },
});

export const { getRandomQuote, toggleFavorite } = quoteSlice.actions;
export default quoteSlice;
