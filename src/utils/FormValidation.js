import React from 'react'

function useFormValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage })
    setIsValid(e.target.closest('form').checkValidity())
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsVald = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsVald);
    },
    [setValues, setErrors, setIsValid]
  )
  return { values, handleChange, errors, isValid, resetForm };
}

export default useFormValidation;