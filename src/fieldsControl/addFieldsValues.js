export default (defaultFieldsValues, _id) => {

  // -----------
  // TODO: Refactor: Add allFields to state. Allow reuse this reference (here and cleanForm)
  // Controls default values
  // -----------

  const formScope =  document.getElementById(_id);
  const allFields = formScope.querySelectorAll(`[data-valle-field]`);

  // console.log(defaultFieldsValues);

  allFields.forEach(field => {

    const fieldKey = field.dataset.valleField;

    if(defaultFieldsValues[fieldKey] || defaultFieldsValues[fieldKey] == 0) {

      // console.log('---------------')
      // console.log(field.id)
      // console.log(defaultFieldsValues[fieldKey])
      // console.log('---------------')

      field.value = defaultFieldsValues[fieldKey];
    }

  });

}
