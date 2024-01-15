import {add, sub} from '@prih/awesome-utils';

export class AwesomeCore {
  plus(a: number, b: number): number {
    return add(a, b);
  }

  minus(a: number, b: number): number {
    return sub(a, b);
  }
}
