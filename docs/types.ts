export type Defined<T> = T extends undefined | null ? never : T;

export function assertIsDefined<T>(val: T, message?: string): asserts val is Defined<T> {
  if (val === undefined || val === null) {
    throw new Error(message || `Expected 'val' to be defined, but received ${String(val)}`);
  }
}

export function isDefined<T>(val: T): val is Defined<T> {
  return val !== undefined && val !== null;
}