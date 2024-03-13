import Downshift from 'downshift';

import { Theme } from '../../lib/theme';
import { Language } from '../../lib/language.ts';
import {
  AutoCompleteDropdown,
  AutoCompleteLabel,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteItemButton,
  AutoCompleteWrapper,
} from './AutoComplete.styles.ts';

type Item = Theme | Language;

interface AutoCompleteProps<T extends Item> {
  label: string;
  items: readonly T[];
  onSelect: (value: T | null) => void;
  selectedItem: T;
}

export default function AutoComplete<T extends Item>({
  label,
  items,
  onSelect,
  selectedItem,
}: AutoCompleteProps<T>) {
  return (
    <AutoCompleteWrapper>
      <Downshift
        selectedItem={selectedItem}
        onChange={onSelect}
        itemToString={(item) => item ?? ''}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <AutoCompleteLabel {...getLabelProps()}>{label}</AutoCompleteLabel>
            <AutoCompleteInput {...getInputProps()} />
            <AutoCompleteDropdown {...getMenuProps()}>
              {isOpen
                ? items
                    .filter((item) => !inputValue || item.includes(inputValue))
                    .map((item, index) => (
                      <AutoCompleteItem
                        {...getItemProps({
                          index,
                          key: item,
                          item: item as T,
                          isActive: highlightedIndex === index,
                          isSelected: selectedItem === item,
                        })}
                      >
                        <AutoCompleteItemButton>{item}</AutoCompleteItemButton>
                      </AutoCompleteItem>
                    ))
                : null}
            </AutoCompleteDropdown>
          </div>
        )}
      </Downshift>
    </AutoCompleteWrapper>
  );
}
