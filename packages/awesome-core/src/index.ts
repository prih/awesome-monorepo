import {add, div, mul, sub} from '@prih/awesome-utils';

export class AwesomeCore {
  plus(a: number, b: number): number {
    return add(a, b);
  }

  minus(a: number, b: number): number {
    return sub(a, b);
  }

  times(a: number, b: number): number {
    return mul(a, b);
  }

  div(a: number, b: number): number {
    return div(a, b);
  }
}
