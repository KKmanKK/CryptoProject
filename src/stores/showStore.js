import axios from "axios";
import { create } from "zustand";

const showStore = create((set) => ({
  graphData: [],
  fetchData: async (id) => {
    const [graphRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?market_data=true`
      ),
    ]);

    const graphData = graphRes.data.prices.map((price) => {
      const [timestamp, pric] = price;
      const date = new Date(timestamp).toLocaleDateString("en-GB");
      return {
        Date: date,
        Price: pric,
      };
    });
    set({ graphData });
    console.log(dataRes);
  },
}));

export { showStore };
