import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { dataApi, tableRows, tableColumns } from '../methods';
import '../css/components/Table.css';
import PropTypes from 'prop-types';

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
      this.updateStateItem('loading', true);
      const data = await dataApi.getTableData(filterParams);
      this.updateStateItem('data', data);
      this.updateStateItem('loading', false);
    }
  }

  render() {
    const { loading, data } = this.state; // eslint-disable-line no-unused-vars

    const rows = tableRows(data);
    const columns = tableColumns(data ? data.columns : null);

    // const customStyles = {
    //   rows: {
    //     style: {
    //     },
    //   },
    // };

    return (
      <DataTable
        className="table"
        highlightOnHover
        noHeader
        paginationPerPage={15}
        pagination
        columns={columns}
        data={rows}
        sortable
        // customStyles={customStyles}
      />
    );
  }
}

Table.propTypes = {
  filterParams: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
