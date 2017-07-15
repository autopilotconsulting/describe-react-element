# Describe React Element

Describe react element converts react elemnts to text for testing and debugging.  It was written primarily to support test helper output.

## Installation

```
npm install describe-react-element --save
```

## Usage

```javascript
import { describeReactElement } = require('describe-react-element')

const element = (
  <div name='pip' adorbs={true}>
    <h1>Permanent Excitement!!</h1>
    <h2 />
  </div>
);

describeReactElement(element);
//=> <div name='pip' adorbs='true'>
//=>   <h1>
//=>     Permanent Excitement!!
//=>   </h1>
//=>   <h2 />
//=> </div>
```

### Exports

{ describeReactElement, propertiesForElement }

*propertiesForElement is a helper that outputs the typical properties on a react element (i.e., including the key)*

## License

MIT
