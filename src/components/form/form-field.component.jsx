import { RepeatIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  IconButton,
  Input,
  Tooltip
} from '@chakra-ui/react';

function FormField({
  id,
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  onBlur = null,
  errors = null,
  touched = false,
  isFieldRequired = false,
  generate = false,
  isFlex = false
}) {
  const gridStyle = isFieldRequired && {
    display: { "md": "grid" },
    gridTemplateColumns: "3fr 7fr",
    gridTemplateRows: "repeat(2, 1fr)"
  }

  const flexStyle = isFlex && !isFieldRequired && {
    display: { "md": "flex" },
    alignItems: { "md": "center" },
    justifyContent: { "md": "space-between" },
    flexWrap: { "md": "wrap" }
  };

  const optionsLabel = isFlex && !isFieldRequired && {
    flexShrink: { "md": "0" }
  };

  const optionsInput = isFlex && !isFieldRequired && {
    width: { "base": "100%", "md": "70%" }
  };

  console.log(`form field ${name} errors:`, errors);

  return (
    <FormControl
      {...gridStyle}
      {...flexStyle}
      id={id}
      isRequired={isFieldRequired}
      isInvalid={errors && errors[name] && touched[name]}
    >
      <FormLabel {...optionsLabel}>{label}</FormLabel>
      <Flex
        {...optionsInput}
      >
        <Input
          required={isFieldRequired}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {generate && (
          <Tooltip label="Generate random" placement="top-end" openDelay={500}>
            <IconButton
              ml="0.5rem"
              colorScheme="teal"
              variant="link"
              aria-label={`Generate random ${name}`}
              size="sm"
              icon={<RepeatIcon />}
              onClick={() => generate(name)}
            />
          </Tooltip>
        )}
      </Flex>
      {errors && (
        <GridItem colStart={2}>
          <FormErrorMessage flexBasis="100%">{errors[name]}</FormErrorMessage>
        </GridItem>
      )}
    </FormControl>
  );
};

export default FormField;