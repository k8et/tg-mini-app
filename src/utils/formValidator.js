export function formValidator(form, validatorConfig) {
  if (!form || !validatorConfig) return {};
  let errors = {};
  /* Перебрать validatorConfig */
  Object.entries(validatorConfig).map(([keyConfig, valueConfig]) => {
    /* Перебрать form */
    Object.entries(form).map(([keyForm, valueForm]) => {
      /* Если в form совпал ключ с config */
      if (keyForm === keyConfig) {
        /* Проверить поле на валидаторы */
        valueConfig = formValidate(valueForm, valueConfig);
      }
      return [keyForm, valueForm];
    });
    if (valueConfig !== "") {
      errors = { ...errors, [keyConfig]: valueConfig };
    }
    return [keyConfig, valueConfig];
  });
  return errors;
}

export function formValidate(valueForm, valueConfig) {
  let value = "";
  let error = false;
  // console.log("formValidate", valueForm, valueConfig);
  for (const key in valueConfig) {
    if (error) continue;
    switch (key) {
      case "isRequired": {
        const isValid = typeof valueForm === "number" || typeof valueForm === "boolean" ? valueForm : valueForm?.trim();
        value = !isValid ? `Обязательное поле для заполнения` : "";
        break;
      }
      case "isTradeLink": {
        const regex = /^https:\/\/steamcommunity\.com\/tradeoffer\/new\/\?partner=\d+&token=[a-zA-Z0-9_-]+$/;
        const isValid = regex.test(valueForm);
        value = !isValid ? `Трейд-ссылка указана неверно` : "";
        break;
      }
      case "isIp": {
        const regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
        const isValid = !regex.test(valueForm.value);
        value = !isValid ? `IP введено не корректно` : "";
        break;
      }
      case "isYear": {
        const number = Number(valueForm.value);
        const currentYear = new Date().getFullYear();
        const isValid = number >= 1900 && number <= currentYear;
        value = !isValid ? `Дата введено не корректно` : "";
        break;
      }
      case "isHttp": {
        const regex = /^https?:\/\/\S+\.\S+$/;
        const isValid = !regex.test(valueForm.value);
        value = !isValid ? `Неверные данные` : "";
        break;
      }
      default: {
        break;
      }
    }
    /* Ошибка обнаружена или нет */
    error = !!value;
  }
  return value;
}
