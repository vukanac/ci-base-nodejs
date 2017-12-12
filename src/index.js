/* @flow */

function foo(x: ?number): string {
  if (x) {
    return `${x}`;
  }
  return 'default string';
}

// type Person = {
//   name: string,
//   age: number
// };


foo(1);
