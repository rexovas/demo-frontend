const tableRows = (data) => {
  if (!data) {
    return [];
  }
  const rows = data.data;
  const { columns } = data;
  const rowObjects = [];
  let object = {};
  rows.map((row) => { // eslint-disable-line array-callback-return
    row.map((value, i) => { // eslint-disable-line array-callback-return
      const column = columns[i].toLowerCase();
      object[column] = value;
    });
    rowObjects.push(object);
    object = {};
  });

  return rowObjects;
};

function numberWithCommas(x) {
  console.log(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const tableColumns = (columns) => {
  if (!columns) {
    return [];
  }
  const headers = columns.map((column) => {
    const object = {
      name: column,
      selector: column.toLowerCase(),
      sortable: true,
      wrap: true,
      format: (row) => {
        const col = column.toLowerCase();
        if (col === 'deaths') {
          return numberWithCommas(row[col]);
        }
        return row[col];
      },
    };
    return object;
  });
  return headers;
};


export { tableRows, tableColumns };
