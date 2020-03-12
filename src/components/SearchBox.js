import React, { useCallback, useState, useEffect } from 'react';
import '@shopify/polaris/styles.css';
import {
  Autocomplete, Stack, Tag, TextContainer,
} from '@shopify/polaris';
import { dataApi } from '../methods';


const useAsyncHook = (column, searchStr = '') => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState('false');


  useEffect(() => {
    async function fetchSearchList() {
      try {
        setLoading('true');
        const data = await dataApi.getFilterList(column, searchStr);
        // const json = await response.json();
        // console.log(json);
        setResult(data.result);
      } catch (error) {
        setLoading('null');
      }
    }

    fetchSearchList();
  }, [searchStr]);

  return [result, loading];
};

const SearchBox = (props) => {
  const { column } = props;

  function titleCase(string) {
    return string
      .toLowerCase()
      .split('-')
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join(' ');
  }

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options] = useAsyncHook(column, inputValue);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);
    },
    [options],
  );

  const removeTag = useCallback(
    (tag) => () => {
      const values = [...selectedOptions];
      values.splice(values.indexOf(tag), 1);
      setSelectedOptions(values);
    },
    [selectedOptions],
  );

  const tagsMarkup = selectedOptions.map((value) => {
    const tagLabel = titleCase(value);
    return (
      <Tag key={value} onRemove={removeTag(value)}>
        {tagLabel}
      </Tag>
    );
  });

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Filter by State"
      value={inputValue}
      placeholder="e.g. New York"
    />
  );

  return (
    <div style={{ height: '325px' }}>
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
  );
};

export default SearchBox;
