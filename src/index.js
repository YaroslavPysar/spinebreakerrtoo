// dataValidation.js

const DataValidation = {
    isString: (value) => typeof value === 'string',
    
    isNumber: (value) => typeof value === 'number' && !isNaN(value),
    
    isInteger: (value) => Number.isInteger(value),
    
    isArray: (value) => Array.isArray(value),
    
    isObject: (value) => typeof value === 'object' && !Array.isArray(value) && value !== null,
    
    isBoolean: (value) => typeof value === 'boolean',
    
    isFunction: (value) => typeof value === 'function',
    
    isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    
    isDate: (value) => !isNaN(Date.parse(value)),
    
    isTruthy: (value) => !!value,
    
    isFalsy: (value) => !value,
    
    isNullOrUndefined: (value) => value === null || value === undefined,
    
    minLength: (value, length) => value.length >= length,
    
    maxLength: (value, length) => value.length <= length,
    
    isInRange: (value, min, max) => value >= min && value <= max
  };
  
  module.exports = DataValidation;
  