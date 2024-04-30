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
  ERROR = 'error'
}

/* @ts-expect-error: Object is possibly 'null'. */
export const getTypeOf = (variable: unknown): VariableTypes => ({}).toString.call(variable).match(/\s([a-zA-Z]+)/)[1].toLowerCase() as VariableTypes
