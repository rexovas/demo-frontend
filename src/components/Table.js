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

  updateStateItem = (stateItem, value) => {
    this.setState({ [stateItem]: value });
  }

  componentDidMount = async () => {
    const data = await dataApi.getTableData();
    this.setState({ data, loading: false });
  }

  componentDidUpdate = async (prevProps) => {
    const { filterParams: prevFilterParams } = prevProps;
    const { filterParams } = this.props;
    if (filterParams !== prevFilterParams) {
      // this.setState({ loading: true });
      this.updateStateItem('loading', true);
      const data = await dataApi.getTableData(filterParams);
      this.updateStateItem('data', data);
      this.updateStateItem('loading', false);
    }
  }

  render() {
    const { loading, data } = this.state;
    // const { filterParams } = this.props;
    // console.log(this.state);
    // console.log(filterParams);

    const rows = tableRows(data || null);
    const columns = tableColumns(data ? data.columns : null);

    return (
      <div>
        {loading ? (
          <DataTable
            className="table"
            highlightOnHover
            paginationPerPage="15"
            pagination
            sortable
          />
        )
          : (
            <DataTable
              className="table"
              highlightOnHover
              paginationPerPage="15"
              pagination
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
