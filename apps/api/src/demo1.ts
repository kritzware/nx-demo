const add = (x: number, y: number) => {
  return x + y;
};

add(1, 2);
// add('1', 2);

const x = 123;
const y = '123';
const z: string =
  'ts can infer, it can be overkill to always define the type for primitives (string, boolean, number etc.)';

const array: string[] = ['i', 'am', 'an', 'array'];

const mixedArray: (string | number)[] = ['hello', 123];
