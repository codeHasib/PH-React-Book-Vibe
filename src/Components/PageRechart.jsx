import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BookContext } from "../Context/BookContext";

const PageRechart = () => {
  const { pagesRead } = useContext(BookContext);
  return (
    <div className="w-full h-100">
      <ResponsiveContainer>
        <BarChart data={pagesRead}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Total Pages Bar */}
          <Bar dataKey="totalPages" fill="#8884d8" name="Total Pages" />
          {/* Pages Read Bar */}
          <Bar dataKey="pagesRead" fill="#82ca9d" name="Pages Read" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageRechart;
