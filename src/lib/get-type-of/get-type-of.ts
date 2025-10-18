export enum VariableTypes {
  NUMBER = 'number',
  STRING = 'string',
  BOOLEAN = 'boolean',
  UNDEFINED = 'undefined',
  NULL = 'null',
  BIGINT = 'bigint',
  SYMBOL = 'symbol',
  OBJECT = 'object',
  ARRAY = 'array',
  FUNCTION = 'function',
  MAP = 'map',
  SET = 'set',
  WEAKMAP = 'weakmap',
  WEAKSET = 'weakset',
  DATE = 'date',
  REGEXP = 'regexp',
  PROMISE = 'promise',
  PROXY = 'proxy',
  ERROR = 'error',
}

export const getTypeOf = (variable: unknown): VariableTypes => {
  if (variable === null) return VariableTypes.NULL

  const match = {}.toString.call(variable).match(/\s([a-zA-Z]+)/)
  if (!match) return VariableTypes.UNDEFINED

  return match[1].toLowerCase() as VariableTypes
}
