const idx = require('idx');

const errorGenerator = (path, type, currentData) => {
  return `${path} returned ${currentData} we expected type ${type}`
}

const checkTypes = ({ isNullable, type }, value) => {
  return isNullable ? (typeof value === type || value === null) : typeof value === type
}

const getObjectValues = (route, obj) => {
  const index = (obj, i) => idx(obj, _ => _[i]); 
  return route.split('.').reduce(index, obj)
}


const isNullable = (nullables, val) => nullables.filter(e => val.startsWith(e)).length > 0;


module.exports = {
  errorGenerator,
  checkTypes,
  getObjectValues,
  isNullable,
  
}