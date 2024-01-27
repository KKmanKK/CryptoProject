import axios from "axios";
import { create } from "zustand";
import { debounce } from "../helpers/debounce";

const homeStore = create((set) => ({
  coins: [],
  tranding: [],
  query: "",
  setQuery: (e) => {
    set({ query: e.target.value });

    homeStore.getState().serachCoins();
  },

  serachCoins: debounce(async () => {
    const { query, tranding } = homeStore.getState();
    if (query.length > 2) {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );

      const coins = res.data.coins.map((coin) => {
        return {
          id: coin.id,
          name: coin.name,
          image: coin.large,
        };
      });
      set({ coins });
    } else {
      set({ coins: tranding });
    }
  }, 500),

  fetchCoint: async () => {
    const [res, btcRes] = await Promise.all([
      axios.get("https://api.coingecko.com/api/v3/search/trending"),
      axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      ),
    ]);
    // const res = await axios.get(
    //   "https://api.coingecko.com/api/v3/search/trending"
    // );
    const btcPrice = btcRes.data.bitcoin.usd;
    console.log(btcPrice);
    const coins = res.data.coins.map((coin) => {
      return {
        id: coin.item.id,
        name: coin.item.name,
        image: coin.item.large,
        priceBtc: coin.item.price_btc.toFixed(10),
        priceUsd: (coin.item.price_btc * btcPrice).toFixed(6),
      };
    });
    console.log(coins);
    set({ coins, tranding: coins });
  },
}));

export { homeStore };
