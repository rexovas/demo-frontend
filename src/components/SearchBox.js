import React, { useCallback, useState, useEffect } from 'react';
import '../css/components/SearchBox.css';
import '@shopify/polaris/styles.css';
import {
  Autocomplete, Stack, Tag, TextContainer,
} from '@shopify/polaris';
import { dataApi } from '../methods';
import Table from './Table';
import DropDown from './DropDown';


const useAsyncHook = (searchStr = '', field) => {
  console.log('FIELD', field);
  const [result, setResult] = useState([]);
  const [placeholder, setPlaceholder] = useState('');


  useEffect(() => {
    async function getOptions() {
      const data = await dataApi.getFilterList(searchStr, field);
      setResult(data.result);

      if (data.result && data.result.length > 2) {
        setPlaceholder(data.result[2].label);
      } else if (data.result && data.result.length === 1) {
        setPlaceholder(data.result[0].label);
      } else {
        setPlaceholder('New York');
      }
    }

    getOptions();
  }, [searchStr, field]);

  return [result, placeholder];
};

const SearchBox = () => {
  const [selectedField, setSelectedField] = useState('state'); // For Dropdown
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, placeholder] = useAsyncHook(inputValue, selectedField);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);
    },
    // [options], // eslint-disable-line
    [],
  );

  const removeTag = useCallback(
    (tag) => () => {
      const values = [...selectedOptions];
      values.splice(values.indexOf(tag), 1);
      setSelectedOptions(values);
    },
    [selectedOptions],
  );

  const tagsMarkup = selectedOptions.map((value) => (
    <Tag key={value} onRemove={removeTag(value)}>
      {value}
    </Tag>
  ));

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      value={inputValue}
      placeholder={`e.g. ${placeholder}`}
    />
  );

  const className = tagsMarkup.length === 0 ? 'search-box' : 'search-box-tags';

  return (
    <div className="search-table-wrapper shadow">
      {tagsMarkup.length !== 0
          && (
          <div className="tags">
            <TextContainer>
              <Stack>{tagsMarkup}</Stack>
            </TextContainer>
            {/* <br /> */}
          </div>
          )}
      <div className={className}>
        <div style={{ paddingRight: '2px' }}><DropDown selected={selectedField} callback={setSelectedField} /></div>
        <div style={{ flexBasis: '50vh' }}>
          <Autocomplete
            allowMultiple
            options={options}
            selected={selectedOptions}
            textField={textField}
            onSelect={setSelectedOptions}
            listTitle="Search Suggestions"
          />
        </div>
      </div>
      <div className="table-wrapper">
        <Table filterParams={selectedOptions} />
      </div>
    </div>
  );
};

export default SearchBox;
