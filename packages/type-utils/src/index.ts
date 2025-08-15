// Require<T, K> - Make selected keys K of T required
export type Require<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

// ReadonlyDeep<T> - Recursively make all properties readonly
export type ReadonlyDeep<T> = T extends (...args: any[]) => any
  ? T
  : T extends object
    ? { readonly [P in keyof T]: ReadonlyDeep<T[P]> }
    : T;

// Example usage helper
export type Example = Require<{ a?: string; b?: number }, "a">;
export type ExampleDeep = ReadonlyDeep<{ a: { b: string } }>;
