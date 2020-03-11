import React, { Component } from 'react';
// import '@shopify/polaris/styles.css';
import DataTable from 'react-data-table-component';
// import { DataTable } from '@shopify/polaris';
import { dataApi, tableRows, tableColumns } from '../methods';
// import data from '../assets/data.json';

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

    // console.log(data);
    // console.log(data ? data.data : null);

    const rows = tableRows(data || null);
    const columns = tableColumns(data ? data.columns : null);

    // const columns = [
    //   {
    //     name: 'Title',
    //     selector: 'title',
    //     sortable: true,
    //   },
    //   {
    //     name: 'Year',
    //     selector: 'year',
    //     sortable: true,
    //     right: true,
    //   },
    // ];

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


    //         <DataTable
    //           // showTotalsInFooter
    //           columnContentTypes={[
    //             'numeric',
    //             'text',
    //             'text',
    //             'text',
    //             'numeric',
    //             'numeric',
    //           ]}
    //           headings={data.columns}
    //     // rows={rows}
    //           rows={data.data}
    //           // totals={['', '', '', 255, '$155,830.00']}
    //           // totalsName={{
    //             // singular: 'Total net sales',
    //             // plural: 'Total net sales',
    //           // }}
    //         />
    //       )}
    //   </div>
    // );
  }
}

export default Table;
