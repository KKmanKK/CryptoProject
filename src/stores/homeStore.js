import axios from "axios";
import { create } from "zustand";

const homeStore = create((set) => ({
  coins: [],
  query: "",
  setQuery: (e) => {
    set({ query: e.target.value });
    homeStore.getState().serachCoins();
  },

  serachCoins: async () => {
    const { query } = homeStore.getState();
    const res = axios.get(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    );
    console.log(res);
  },

  fetchCoint: async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const coins = res.data.coins.map((coin) => {
      return {
        id: coin.item.id,
        name: coin.item.name,
        image: coin.item.large,
        priceBtc: coin.item.price_btc,
      };
    });
    set({ coins });
  },
}));

export { homeStore };
