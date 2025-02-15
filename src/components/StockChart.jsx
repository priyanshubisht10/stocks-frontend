import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
   ReferenceLine,
   Label,
} from "recharts";

const StockChart = ({ chartData, dayLow, dayHigh }) => {
   return (
      <ResponsiveContainer width="100%" height={350}>
         <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
         >
            {/* Cartesian grid with lighter lines */}
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />

            {/* X-axis with custom styling */}
            <XAxis
               dataKey="timestamp"
               tick={{ fill: "#4a5568", fontSize: 12 }}
               axisLine={{ stroke: "#cbd5e0" }}
               tickLine={{ stroke: "#cbd5e0" }}
            >
               <Label value="Time" offset={-10} position="insideBottom" fill="#4a5568" />
            </XAxis>

            {/* Y-axis with custom styling */}
            <YAxis
               domain={['auto', 'auto']}
               tick={{ fill: "#4a5568", fontSize: 12 }}
               axisLine={{ stroke: "#cbd5e0" }}
               tickLine={{ stroke: "#cbd5e0" }}
            >
               <Label value="Price ($)" angle={-90} position="insideLeft" fill="#4a5568" />
            </YAxis>

            {/* Custom tooltip */}
            <Tooltip
               contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
               }}
               labelStyle={{ color: "#4a5568", fontWeight: "bold" }}
               itemStyle={{ color: "#4a5568" }}
            />

            {/* Custom legend */}
            <Legend
               verticalAlign="top"
               height={36}
               wrapperStyle={{
                  paddingTop: "10px",
                  fontSize: "14px",
                  color: "#4a5568",
               }}
            />

            {/* Line with a vibrant color and shadow effect */}
            <Line
               type="monotone"
               dataKey="price"
               stroke="#6366f1" // Indigo color
               strokeWidth={2}
               activeDot={{ r: 8, fill: "#6366f1", stroke: "#ffffff", strokeWidth: 2 }}
               dot={{ r: 4, fill: "#6366f1", stroke: "#ffffff", strokeWidth: 2 }}
            />

            {/* Reference line for dayLow */}
            <ReferenceLine
               y={dayLow}
               stroke="#ef4444" // Red color
               strokeWidth={1.5}
               strokeDasharray="3 3"
            >
               <Label
                  value={`Day Low: $${dayLow.toFixed(2)}`}
                  position="insideBottomLeft"
                  fill="#ef4444"
                  fontSize={12}
               />
            </ReferenceLine>

            {/* Reference line for dayHigh */}
            <ReferenceLine
               y={dayHigh}
               stroke="#10b981" // Green color
               strokeWidth={1.5}
               strokeDasharray="3 3"
            >
               <Label
                  value={`Day High: $${dayHigh.toFixed(2)}`}
                  position="insideTopLeft"
                  fill="#10b981"
                  fontSize={12}
               />
            </ReferenceLine>
         </LineChart>
      </ResponsiveContainer>
   );
};

export default StockChart;