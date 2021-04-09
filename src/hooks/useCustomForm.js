import { useState, useEffect, useRef } from 'react';

const useCustomForm = ({ initialValues, validate, onSubmit }) => {
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
    const { name, value } = event.target;

    // save field values
    setValues({ ...values, [name]: value });

    // was the field modified
    setTouched({ ...touched, [name]: true });
    console.log(touched);
  };


  const handleBlur = (event) => {
    const { name, value } = event.target;
    console.log('blur from: ', name)

    // remove whatever error was there previously
    const { [name]: removedErr, ...rest } = errors;

    let error;
    // check for new error
    if (validate[name]) {
      error = validate[name](value);
    }

    console.log(errors)
    // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error })
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // validate the form
    // const formValidation = Object.keys(values).reduce(
    //   (acc, key) => {
    //     const newError = validate[key](values[key]);
    //     const newTouched = { [key]: true };
    //     return {
    //       errors: {
    //         ...acc.errors,
    //         ...(newError && { [key]: newError }),
    //       },
    //       touched: {
    //         ...acc.touched,
    //         ...newTouched
    //       },
    //     };
    //   },
    //   {
    //     errors: { ...errors },
    //     touched: { ...touched }
    //   }
    // );

    // setErrors(formValidation.errors);
    // setTouched(formValidation.touched);

    onSubmit(values, errors);
  };

  return {
    setValues,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  };
};

export default useCustomForm;