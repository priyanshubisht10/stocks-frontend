import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TopChart = ({ stock_symbol }) => {
   const [stockData, setStockData] = useState([]);

   useEffect(() => {
      // Fetch data from localStorage
      const storedData = JSON.parse(localStorage.getItem('stockData'));

      // Check if the stock_symbol exists in the stored data
      if (storedData && storedData[stock_symbol]) {
         const stockEntries = storedData[stock_symbol];

         // Transform the data into Recharts format
         const transformedData = Object.keys(stockEntries).map(date => {
            const stockInfo = stockEntries[date];
            return {
               date,
               open: parseFloat(stockInfo['1. open']),
               high: parseFloat(stockInfo['2. high']),
               low: parseFloat(stockInfo['3. low']),
               close: parseFloat(stockInfo['4. close']),
               volume: parseFloat(stockInfo['5. volume'])
            };
         });

         transformedData.sort((a, b) => new Date(a.date) - new Date(b.date));

         setStockData(transformedData);
      } else {
         console.warn(`No data found for stock symbol: ${stock_symbol}`);
         setStockData([]);
      }
   }, [stock_symbol]); 

   return (
      <ResponsiveContainer width="100%" height="100%"> {/* Make the chart responsive */}
         <LineChart
            data={stockData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="open" stroke="#8884d8" name="Open Price" />
            <Line type="monotone" dataKey="close" stroke="#82ca9d" name="Close Price" />
         </LineChart>
      </ResponsiveContainer>
   );
};

export default TopChart;