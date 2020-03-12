import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { dataApi, tableRows, tableColumns } from '../methods';
import '../css/components/Table.css';

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

  render() {
    const { loading, data } = this.state;

    const rows = tableRows(data || null);
    const columns = tableColumns(data ? data.columns : null);

    return (
      <div>
        {loading ? <div>loading...</div>
          : (
            <DataTable
              className="table"
              highlightOnHover
              paginationPerPage="15"
              pagination
              persistTableHead
              // fixedHeader
              // fixedHeaderScrollHeight
              // title="Age-Adjusted Death Rates for the Top 10 Leading Causes of Death in the US"
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
