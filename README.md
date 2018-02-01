# Endpoint-Testar
*** 

Lightweight function helper to test the result of an endpoint against a type model.

## Usage:
```javascript
// @flow

import { endpointTestar, types } from 'endpoint-testar';
const t = types;

type EndpointTestar = (response: Object, dataType: Object, nullables?: Array<string>) => Array<string>;

const FetchResult = {
  name: 'what ever',
  age: '23',
  doc: [{
    number: 100,
  }]
};

const DataTypes = {
    name: t.string,
    age: t.number,
    doc: [{
        number: t.number,
    }]
};

const checkForErrors = () => endpointTestar(FetchResult, DataTypes); // ['age returned 23 we expected type number']
```


**Take a look at the test files for a better understanding**


TODO:
- improve README.
- improve performance.
