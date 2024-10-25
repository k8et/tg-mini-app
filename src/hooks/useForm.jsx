import { useCallback, useEffect, useState } from "react";
import { formValidator } from "../utils/formValidator";

const useForm = props => {
  const { onSubmit, data = {}, validation = {} } = props;
  const initialForm = data;
  const validatorConfig = validation;
  const [form, setForm] = useState(initialForm || {});
  const [errors, setErrors] = useState({});
  const [focusConfig, setFocusConfig] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [isValid, setValid] = useState(true);

  const handlerChange = useCallback(
      ({ name, value }) => {
        setForm(state => ({ ...state, [name]: value }));
      },
      [form]
  );

  const handlerSubmit = event => {
    event?.preventDefault();

    const isValid = getValidStatus();
    if (!isValid) {
      setSubmit(true);
      setValid(false);
      return;
    }

    if (typeof initialForm === "object") {
      setForm(state => onSubmit?.(state));
      setForm(() => initialForm);
      setFocusConfig({});
      setErrors({});
      setSubmit(false);
      setValid(true);
    }
  };

  // const handlerBlur = e => {
  //   const { name } = e.target;
  //   let focusErrors = {};
  //   if (typeof validatorConfig === "object") {
  //     const arrayConfig = Object.entries(validatorConfig);
  //     arrayConfig.forEach(([keyConfig, valueConfig]) => {
  //       if (keyConfig === name) {
  //         focusErrors = { ...focusErrors, [keyConfig]: valueConfig };
  //       }
  //     });
  //     setFocusConfig({ ...focusConfig, ...focusErrors });
  //   }
  // };

  const getValidStatus = useCallback(() => {
    const errors = formValidator(form, validatorConfig);

    return Object.keys(errors).length === 0;
  }, [validatorConfig, form]);

  const validate = useCallback(() => {
    const errors = isSubmit ? formValidator(form, validatorConfig) : {}; // formValidator(form, focusConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }, [isSubmit, form, validatorConfig]);

  useEffect(() => {
    const isValid = validate();
    if (isSubmit) setValid(isValid);
  }, [form, isSubmit]);

  // const handlerKeyDown = useCallback(event => {
  //   const { keyCode, target } = event;
  //   if (keyCode === 13) {
  //     event.preventDefault();
  //     const form = target?.form;
  //     const indexField = Array.prototype.indexOf.call(form, event.target);
  //     form.elements[indexField + 1].focus();
  //   }
  // }, []);

  return {
    form,
    setForm,
    errors,
    setErrors,
    handlerChange,
    handlerSubmit,
    // handlerBlur,
    // handlerKeyDown,
    isValid
  };
};

export default useForm;
