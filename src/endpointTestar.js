const { mapToDotNotation } = require('./mapToDotNotation');
const {
  errorGenerator,
  checkTypes,
  getObjectValues,
  isNullable,
} = require('./helpers');
const t = require('./types');

const endpointTestar = (data, model, nulls = []) => {
  const mapped = mapToDotNotation(model);
  const errors = [];

  mapped.forEach(each => {
    const currentType = getObjectValues(each, model);
    const currentData = getObjectValues(each, data);
    
    if (currentData === undefined || currentData === null) {
      if (isNullable(nulls, each)) return;
      
      typeof currentType === 'function' ?
        errors.push(errorGenerator(each, currentType().type))
        : errors.push(errorGenerator(each, currentType instanceof Array ? 'Array' : typeof currentType))
      return
    }

    if (typeof currentType === 'function') {
      const isValid = checkTypes(currentType(), currentData);
      return !isValid && errors.push(errorGenerator(each, currentType().type, currentData)); 
    }
    
    if (currentType instanceof Array) {
      const isArray = currentData instanceof Array;
      return !isArray && errors.push(errorGenerator(each, 'Array'));
    }


    if (typeof currentType === 'object') {
      const isObject = !(currentData instanceof Array) && (getObjectValues(each, data) instanceof Object);
      return !isObject && errors.push(errorGenerator(each, 'Object'));
    }
    
    errors.push(errorGenerator(each, currentType));
  })
  return errors;
}

module.exports = {
  endpointTestar,
  types: t,
}
