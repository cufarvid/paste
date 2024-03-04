import { ChangeEvent, useState } from 'react';
import {
  AutoCompleteWrapper,
  AutoCompleteInput,
  AutoCompleteDropdownContainer,
  AutoCompleteItem,
  AutoCompleteItemButton,
} from './AutoComplete.styles';
import { Theme } from '../../lib/theme.ts';
import { Language } from '../../lib/language.ts';

type Item = Theme | Language;

interface AutoCompleteProps<T extends Item> {
  data: readonly T[];
  placeholder: string;
  onSelect: (value: T) => void;
}

interface SearchState {
  text: string;
  suggestions: string[];
}

export default function AutoComplete<T extends Item>({
  data,
  placeholder,
  onSelect,
}: AutoCompleteProps<T>) {
  const [search, setSearch] = useState<SearchState>({
    text: '',
    suggestions: [],
  });
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let suggestions: string[] = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = data.filter((x: string) => regex.test(x));
    }
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  };

  const handleSelect = (value: T) => {
    setIsComponentVisible(false);
    onSelect(value);
    setSearch({
      text: value,
      suggestions: [],
    });
  };

  const handleBlur = () => {
    setIsComponentVisible(false);
    setSearch({
      text: '',
      suggestions: [],
    });
  };

  const { suggestions } = search;

  return (
    <AutoCompleteWrapper>
      <AutoCompleteInput
        type="text"
        onChange={handleChange}
        value={search.text}
        autoComplete="off"
        placeholder={placeholder}
        onBlur={handleBlur}
      />
      {suggestions.length > 0 && isComponentVisible && (
        <AutoCompleteDropdownContainer>
          {search.suggestions.map((suggestion) => (
            <AutoCompleteItem key={suggestion}>
              <AutoCompleteItemButton
                key={suggestion}
                onClick={() => handleSelect(suggestion as T)}
              >
                {suggestion}
              </AutoCompleteItemButton>
            </AutoCompleteItem>
          ))}
        </AutoCompleteDropdownContainer>
      )}
    </AutoCompleteWrapper>
  );
}
