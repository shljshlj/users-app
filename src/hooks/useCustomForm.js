import { useState, useEffect, useRef } from 'react';

const useCustomForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  const formRendered = useRef(true);

  useEffect(() => {
    if (formRendered.current) {
      setValues(initialValues);
      setErrors({});
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (event) => {
    event.persist();
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors({ ...errors });
    onSubmit(values, errors);
  }

  return {
    setValues,
    values,
    errors,
    handleChange,
    handleSubmit
  };
}

export default useCustomForm;