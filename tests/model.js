const t = require('../src/types');

module.exports = {
  Result: {
    schoolName: t.string,
    address: {
      number: t.number,
      street: t.string,
      complement: t.string,
      city: t.string,
      state: t.string,
    },
    director: {
      name: t.string,
      age: t.number,
      previousDistricts: [
        {
          schoolName: t.string,
          address: {
            number: t.number,
            street: t.string,
            complement: t.string,
            city: t.string,
            state: t.string,
          },
        },
        {
          schoolName: t.string,
          address: {
            number: t.number,
            street: t.string,
            complement: t.string,
            city: t.string,
            state: t.string,
          },
        },
      ]
    },
    bestStudents: [{
      name: t.string,
      age: t.number,
      grade: t.string,
      responsibles: [
        {
          name: t.string,
          age: t.number,
          contact: {
            cellPhone: t.string,
            email: t.string,
          },
        }
      ]
    },
    {
      name: t.string,
      age: t.number,
      grade: t.string,
    }
    ]
  }
};
