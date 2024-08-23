import { useMemo } from "react";
import DataTable from "react-data-table-component";

const defaultCustomStyles = {
  headCells: {
    style: {
      backgroundColor: "#3b3b3b",
      color: "#fff",
      fontSize: 14,
      fontWeight: 700,
    },
  },
  cells: {
    style: {
      fontSize: 14,
      color: "#fff",
      backgroundColor: "#3b3b3b",
      padding: "10px 16px",
    },
  },
  rows: {
    style: {
      backgroundColor: "#3b3b3b", // Apply background to all rows
    },
  },
  table: {
    style: {
      backgroundColor: "#3b3b3b", // Background for the entire table
    },
  },
  tableWrapper: {
    style: {
      backgroundColor: "#3b3b3b", // Background for the table wrapper
    },
  },
  pagination: {
    style: {
      backgroundColor: "#3b3b3b", // Background for pagination
      color: "#fff", // Text color for pagination
    },
    pageButtonsStyle: {
      backgroundColor: "#3b3b3b", // Background for pagination buttons
    },
  },
};

function Table({ columns, data, customStyles, ...rest }) {
  const mergedCustomStyles = useMemo(
    () => ({ ...defaultCustomStyles, ...customStyles }),
    [customStyles]
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={mergedCustomStyles}
      {...rest}
    />
  );
}

export default Table;
