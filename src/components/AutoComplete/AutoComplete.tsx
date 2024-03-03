import { ChangeEvent, useState } from 'react';
import {
  AutoCompleteWrapper,
  AutoCompleteInput,
  AutoCompleteDropdownContainer,
  AutoCompleteItem,
  AutoCompleteItemButton,
} from './AutoComplete.styles';

interface AutoCompleteProps {
  data: string[];
  placeholder: string;
  onSelect: (value: string) => void;
}

interface SearchState {
  text: string;
  suggestions: string[];
}

export default function AutoComplete({
  data,
  placeholder,
  onSelect,
}: AutoCompleteProps) {
  //const { theme, setTheme, language, setLanguage } = useStore();
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

  const handleSelect = (value: string) => {
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
                onClick={() => handleSelect(suggestion)}
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
