# Data Validation Library

A lightweight JavaScript library for data validation in Node.js applications.

## Installation

You can install the Data Validation Library via npm:

```bash
npm install data-validation-library
```

## Usage

```javascript
const DataValidation = require('data-validation-library');

// Example usage
const email = 'example@email.com';
if (DataValidation.isEmail(email)) {
  console.log('Valid email address');
} else {
  console.log('Invalid email address');
}
```

## Available Validation Functions

- `isString(value)`
- `isNumber(value)`
- `isInteger(value)`
- `isArray(value)`
- `isObject(value)`
- `isBoolean(value)`
- `isFunction(value)`
- `isEmail(value)`
- `isDate(value)`
- `isTruthy(value)`
- `isFalsy(value)`
- `isNullOrUndefined(value)`
- `minLength(value, length)`
- `maxLength(value, length)`
- `isInRange(value, min, max)`

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
