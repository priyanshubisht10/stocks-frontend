import axios from "axios";

const API_KEY = import.meta.env.GRAPH_API_KEY;


export const getStockData = async (symbol) => {
const BASE_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};
