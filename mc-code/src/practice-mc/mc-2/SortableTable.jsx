// import React from "react";
// import SortableTable from "./SortableTable";
// import "./styles.css";

// const App = () => {
//   const data = [
//     { name: "John", age: 28, salary: 50000 },
//     { name: "Alice", age: 24, salary: 60000 },
//     { name: "Bob", age: 32, salary: 45000 },
//   ];

//   const columns = [
//     { label: "Name", key: "name" },
//     { label: "Age", key: "age" },
//     { label: "Salary", key: "salary" },
//   ];

//   return (
//     <div>
//       <h2>Sortable Table</h2>
//       <SortableTable data={data} columns={columns} />
//     </div>
//   );
// };

// export default App;
// -----------------
import React, { useState } from "react";

const SortableTable = ({ data, columns }) => {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...tableData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setTableData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} onClick={() => handleSort(col.key)}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;
// -----------------------------
.table {
  width: 500px;
  margin: 40px auto;
  border-collapse: collapse;
  font-family: Arial;
}

.table th,
.table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.table th {
  background: #f5f5f5;
  cursor: pointer;
}

.table th:hover {
  background: #e5e5e5;
}

.table tr:nth-child(even) {
  background: #fafafa;
}