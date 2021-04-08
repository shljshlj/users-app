import { useState, useEffect, useRef } from 'react';

const useCustomForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onBlur, setOnBlur] = useState(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (formRendered.current) {
      console.log(formRendered.current)
      setValues(initialValues);
      setErrors({});
      setTouched({});
      setOnBlur(false);
    }
    formRendered.current = false;
    console.log(formRendered.current)
  }, [initialValues]);

  const handleChange = (event) => {
    event.persist();
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (event) => {
    const { target } = event;
    const { name } = target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors });
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors({ ...errors });
    onSubmit(values, errors);
  }

  return {
    setValues,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  };
}

export default useCustomForm;