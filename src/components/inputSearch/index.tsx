import { Button, Input, InputProps, Stack, StackDivider, StackProps, ButtonProps } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

interface FormInputProps {
  value: string
  onChange: any
  placeholder: string
  type: string
  onClick: any
}

const SearchInput: React.FC<FormInputProps> = ({value, placeholder, onChange, type, onClick}) => {
  return (
    <SearchInputWrapper
      direction={'row'}
      spacing={1}
      divider={<StackDivider borderColor="gray.200" />}
    >
      <SearchInputField 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        type={type}
      />
      <SearchButton onClick={onClick} colorScheme={'teal'} size="md" type="submit">
        Search
      </SearchButton>
    </SearchInputWrapper>
  )
}

export default SearchInput

const SearchInputWrapper = styled(Stack)<StackProps>`
  width: 100%;
  max-width: 540px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
`

const SearchInputField = styled(Input)<InputProps>`
  width: 100%;
  outline: none;
  border: none;
`

const SearchButton = styled(Button)<ButtonProps>`
  border-radius: 0 4px 4px 0;
`