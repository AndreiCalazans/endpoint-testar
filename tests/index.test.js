const { endpointTestar, types } = require('../src/endpointTestar');
const t = types;
const modelType = require('./model');
const result = require('./result');


describe('Types', () => {
  it('should exist 3 types', () => {
    expect(Object.keys(types).length).toBe(3);
  })

  it('should return the correct type for each', () => {
    const expectedTypes = ['string', 'number', 'function'];
    expectedTypes.forEach(each => {
      expect(types[each]()).toEqual(expect.objectContaining({ type: each }));
    })
  })
})


describe('endpointTestar function', () => {
  it('should return 0 errors', () => {
    const validations = endpointTestar(result, modelType);
    expect(validations.length).toBe(0);
  });

  it('should return an array', () => {
    const validations = endpointTestar(result, modelType);
    expect(validations).toBeInstanceOf(Array);
  });



  describe('endpointTestar Error messages', () => {
    let localResp = {
      name: 'what ever',
      age: '23',
      doc: [{
        number: 100,
      }]
    };
    let localModel = {
      name: t.string,
      age: t.number,
      doc: [{
        number: t.number,
      }]
    };
    const validations = endpointTestar(localResp, localModel);

    it('should return 1 error', () => {
      expect(validations.length).toBe(1); 
    });

    it('should have the correct error message', () => {
      expect(validations[0]).toEqual('age returned 23 we expected type number')
    });


    it('should have the correct error message part 2', () => {
      localResp.doc[0].number = 'adult';
      expect(endpointTestar(localResp, localModel)[1]).toEqual('doc.0.number returned adult we expected type number');
    });
  });



  describe('handling null values', () => {
    const localResp = () => ({
      name: 'what ever',
      age: 12,
      doc: [{
        number: 100,
      }]
    });
    const localModel = () => ({
      name: t.string,
      age: t.number,
      doc: [{
        number: t.number,
      }]
    });

    it('should throw errors if val is nullable', () => {
      let resp = localResp();
      resp.age = null;
      expect(endpointTestar(resp, localModel()).length).toBe(1);
    })

    it('should NOT throw errors if val is nullable', () => {
      let resp = localResp();
      const nullableVal = ['age'];
      resp.age = null;
      expect(endpointTestar(resp, localModel(), nullableVal).length).toBe(0);
    })



    it('should return errors if val is nullable NESTED', () => {
      let resp = localResp();
      resp.doc[0].number = null;
      expect(endpointTestar(resp, localModel()).length).toBe(1);
    })

    it('should NOT return errors if val is nullable NESTED', () => {
      let resp = localResp();
      const nullableVal = ['doc.0.number'];
      resp.doc[0].number = null;
      expect(endpointTestar(resp, localModel(), nullableVal).length).toBe(0);
    });


    it('should NOT return erros if val is nullable but has correct type values', () => {
      let resp = localResp();
      const nullableVal = ['doc.0.number'];
      expect(endpointTestar(resp, localModel(), nullableVal).length).toBe(0);
    });


    it('should return error if val is nullable but has incorrect value', () => {
      let resp = localResp();
      const nullableVal = ['doc.0.number'];
      resp.doc[0].number = 'name';
      expect(endpointTestar(resp, localModel(), nullableVal).length).toBe(1);
      expect(endpointTestar(resp, localModel(), nullableVal)[0]).toEqual('doc.0.number returned name we expected type number');
    });
  })
})