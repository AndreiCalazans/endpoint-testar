
const f = (t) => ({ type: t });

module.exports = {
  string: () => f('string'),
  number: () => f('number'),
  function: () => f('function'),
};
