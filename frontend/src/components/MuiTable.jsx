import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom"

const columns = [
  {
    field: "img_url",
    headerName: "IMG",
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <img
        src={params.value}
        height="30"
        width="30"
        style={{ marginLeft: "10px" }}
        alt="product"
      />
    ),
  },
  {
    field: "title",
    headerName: "Product Name",
    sortable: false,
    flex: 1,
    minWidth: 100,
  },
  { field: "category", headerName: "Category", sortable: true, width: 130 },
  { field: "price", headerName: "Price", width: 130, sortable: false },
  {
    field: "rating",
    headerName: "Rating",
    width: 130,
    valueFormatter: ({ value }) => value,
    renderCell: (params) => (
      <Rating
        size="small"
        readOnly
        defaultValue={params.value}
        precision={0.5}
      />
    ),
    sortComparator: (a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      if (a === b) return 0;
    },
  },
];


const DataTable = ({ products }) => {
  const navigate = useNavigate()
    
  return (
    <div style={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        onCellClick={(e) => {navigate(`/product/${e.id}`,{replace:true})}}
      />
    </div>
  );
};

export default DataTable;
