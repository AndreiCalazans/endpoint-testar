module.exports = {
  Result: {
    schoolName: 'Mineola High School',
    address: {
      number: 834,
      street: 'Howard Luke',
      complement: 'st',
      city: 'Mineola',
      state: 'New York',
    },
    director: {
      name: 'Scott Riddle',
      age: 63,
      previousDistricts: [
        {
          schoolName: 'Carle Place High School',
          address: {
            number: 834,
            street: 'Paul',
            complement: 'st',
            city: 'Carle Place',
            state: 'New York',
          },
        },
        {
          schoolName: 'Carle Place Middle School',
          address: {
            number: 1000,
            street: 'Paul',
            complement: 'st',
            city: 'Carle Place',
            state: 'New York',
          },
        },
      ]
    },
    bestStudents: [{
      name: 'Jonathan',
      age: 15,
      grade: 'Sophmore',
      responsibles: [
        {
          name: 'Mathews Simon',
          age: 48,
          contact: {
            cellPhone: '51632328778',
            email: 'mat@gmail.com',
          },
        }
      ]
    },
    {
      name: 'Melissa',
      age: 15,
      grade: 'Sophmore',
    }
    ]
  }
};
