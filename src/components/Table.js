import React, { Component } from 'react';
import '@shopify/polaris/styles.css';
import { DataTable } from '@shopify/polaris';
import tableRows from '../methods/tableRows';
import data from '../assets/data.json';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.test = 'TEST';
  }

  render() {
    // const rows = [
    //   ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    //   ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    //   [
    //     'Navy Merino Wool Blazer with khaki chinos and yellow belt',
    //     '$445.00',
    //     124518,
    //     32,
    //     '$14,240.00',
    //   ],
    // ];

    const rows = tableRows(data);

    return (
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
    );
  }
}

export default Table;
