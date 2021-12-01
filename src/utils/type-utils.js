// utilities to write type-safer code

// like object entries, but better typed
export function entries(o) {
  return Object.entries(o);
}

// type guard for filtering out null objects
export const isNotNull = (x) => {
  return x !== null;
};
