import { RepeatIcon } from '@chakra-ui/icons';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
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
  handleChange,
  isFieldRequired = false,
  errors = null,
  touched = false,
  generate = false,
  isFlex = false
}) {
  const optionsControl = isFlex && {
    display: { "md": "flex" },
    alignItems: { "md": "center" },
    justifyContent: { "md": "space-between" }
  };

  const optionsLabel = isFlex && {
    flexShrink: { "md": "0" }
  };

  const optionsInput = isFlex && {
    width: { "base": "100%", "md": "70%" }
  };

  return (
    <FormControl
      {...optionsControl}
      id={id}
      isRequired={isFieldRequired}
      isInvalid={errors && errors.name && touched.name}
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
          onChange={handleChange}
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
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormField;