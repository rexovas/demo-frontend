import React, { useCallback, useState, useEffect } from 'react';
import '@shopify/polaris/styles.css';
import {
  Autocomplete, Stack, Tag, TextContainer,
} from '@shopify/polaris';
import { dataApi } from '../methods';
import Table from './Table';


const useAsyncHook = (searchStr = '') => {
  const [result, setResult] = useState([]);
  const [placeholder, setPlaceholder] = useState('');


  useEffect(() => {
    async function getOptions() {
      const data = await dataApi.getFilterList(searchStr);
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
  }, [searchStr]);

  return [result, placeholder];
};

const SearchBox = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, placeholder] = useAsyncHook(inputValue);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);
    },
    [options], // eslint-disable-line
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
      {/* {tagLabel} */}
      {value}
    </Tag>
  ));

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Filter by State/Cause Name"
      value={inputValue}
      placeholder={`e.g. ${placeholder}`}
    />
  );

  return (
    <div>
      <div>
        <TextContainer>
          <Stack>{tagsMarkup}</Stack>
        </TextContainer>
        <br />
        <Autocomplete
          allowMultiple
          options={options}
          selected={selectedOptions}
          textField={textField}
          onSelect={setSelectedOptions}
          listTitle="Search Suggestions"
        />
      </div>
      <div>
        <Table filterParams={selectedOptions} />
      </div>
    </div>
  );
};

export default SearchBox;
