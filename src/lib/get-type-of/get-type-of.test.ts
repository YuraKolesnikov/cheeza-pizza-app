import {getTypeOf, VariableTypes} from './get-type-of';

describe('primitives', () => {
  test('number', () => {
    expect(getTypeOf(0)).toBe(VariableTypes.NUMBER)
  })

  test('string', () => {
    expect(getTypeOf('string')).toBe(VariableTypes.STRING)
  })

  test('boolean', () => {
    expect(getTypeOf(true)).toBe(VariableTypes.BOOLEAN)
  })

  test('undefined', () => {
    expect(getTypeOf(undefined)).toBe(VariableTypes.UNDEFINED)
  })

  test('null', () => {
    expect(getTypeOf(null)).toBe(VariableTypes.NULL)
  })
})

describe('reference type variables', () => {
  test('object', () => {
    expect(getTypeOf({})).toBe(VariableTypes.OBJECT)
  })

  test('array', () => {
    expect(getTypeOf([])).toBe(VariableTypes.ARRAY)
  })

  test('function', () => {
    expect(getTypeOf(function() {})).toBe(VariableTypes.FUNCTION)
  })

  test('map', () => {
    expect(getTypeOf(new Map())).toBe(VariableTypes.MAP)
  })

  test('set', () => {
    expect(getTypeOf(new Set())).toBe(VariableTypes.SET)
  })
})

describe('other', () => {
  test('date', () => {
    expect(getTypeOf(new Date())).toBe(VariableTypes.DATE)
  })

  test('promise', () => {
    expect(getTypeOf(Promise)).toBe(VariableTypes.PROMISE)
  })
})
