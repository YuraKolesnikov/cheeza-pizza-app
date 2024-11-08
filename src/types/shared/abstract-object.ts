/* @ts-expect-error TS2456: Circular reference */
export type AbstractObject = Record<string, string | AbstractObject>
