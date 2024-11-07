import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import TicketItem from './TicketItem';

const GridExample = () => {
  const [rowData, setRowData] = useState([
    { Id: 'Title', Title: 'Model Y', Description: 64950, Status: true },
    { Id: 'Toyota', Title: 'Camry', Description: 25500, Status: false },
    { Id: 'Ford', Title: 'F-150', Description: 32000, Status: false },
  ]);

  const columnDefs = [
    { field: 'Id' },
    { field: 'Title' },
    { field: 'Description'},
    { field: 'Status' },
  ];

  return (
    <div className="ag-theme-alpine " style={{ height: 400, width: '80%' }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default GridExample;
