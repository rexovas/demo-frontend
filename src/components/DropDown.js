import React, { useCallback } from 'react';
import { Select } from '@shopify/polaris';
import PropTypes from 'prop-types';

const DropDown = (props) => {
  const { selected, callback: setSelected } = props;

  const handleSelectChange = useCallback((value) => setSelected(value), [setSelected]);

  const options = [
    { label: 'State', value: 'state' },
    { label: 'Cause Name', value: 'causeName' },
  ];

  return (
    <Select
      label="Filter by"
      labelInline
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  );
};

DropDown.propTypes = {
  selected: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default DropDown;
