import React, { Component } from 'react';
import '@shopify/polaris/styles.css';
import { DataTable } from '@shopify/polaris';
import { dataApi, tableRows } from '../methods';
// import data from '../assets/data.json';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount = async () => {
    const url = 'http://10.0.1.86:5000/table-data';
    try {
      const response = await dataApi.getTableData();
      console.log('RESPONSE', response);
      // const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    // console.log(data);
  }

  getTableData = async (e) => {
    console.log(e);
    try {
      await dataApi.getTableData();
    } catch (error) {
      this.setState({ errorMessage: JSON.stringify(error) });
    }
  }

  render() {
    const rows = [
      ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
      ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
      [
        'Navy Merino Wool Blazer with khaki chinos and yellow belt',
        '$445.00',
        124518,
        32,
        '$14,240.00',
      ],
    ];

    // const rows = tableRows(data);

    const { loading } = this.state;

    return (
      <div>
        {loading ? <div>loading...</div> : <div>...test...</div>}
        <DataTable
          showTotalsInFooter
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
        // rows={rows}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
          totalsName={{
            singular: 'Total net sales',
            plural: 'Total net sales',
          }}
        />
      </div>
    );
  }
}

export default Table;
