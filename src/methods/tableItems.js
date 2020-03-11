const tableRows = (data) => {
  if (!data) {
    return null;
  }
  // console.log(data.index);
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

const tableColumns = (columns) => {
  if (!columns) {
    return null;
  }
  const headers = columns.map((column) => {
    const object = {
      name: column,
      selector: column.toLowerCase(),
      sortable: true,
      wrap: true,
    };
    return object;
  });
  return headers;
};

export { tableRows, tableColumns };
