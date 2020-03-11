import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { dataApi, tableRows, tableColumns } from '../methods';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
    };
  }

  componentDidMount = async () => {
    const data = await dataApi.getTableData();
    this.setState({ data, loading: false });
  }

  // getTableData = async (e) => {
  //   console.log(e);
  //   try {
  //     await dataApi.getTableData();
  //   } catch (error) {
  //     this.setState({ errorMessage: JSON.stringify(error) });
  //   data}
  // }

  render() {
    const { loading, data } = this.state;

    const rows = tableRows(data || null);
    const columns = tableColumns(data ? data.columns : null);

    return (
      <div>
        {loading ? <div>loading...</div>
          : (
            <DataTable
              highlightOnHover
              paginationPerPage={15}
              pagination
            // title="Data"
              columns={columns}
              data={rows}
              sortable
            />
          )}
      </div>
    );
  }
}

export default Table;
