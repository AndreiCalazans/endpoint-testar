
const mapToDotNotation = (data) => {
  let acc = [];
  const scalars = ['string', 'number', 'function'];

  const it = (obj, prevName) => {
    Object.keys(obj).forEach(key => {
      if (scalars.includes(typeof obj[key])) {
        acc.push(prevName ? prevName + '.' + key: key);
        return;
      }
      acc.push(prevName ? prevName + '.' + key: key);
      it(obj[key], prevName ? prevName + '.' + key: key);
    });
  };
  
  it(data);
  
  return acc;
};

module.exports = { mapToDotNotation }



