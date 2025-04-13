import { sum } from './math';

describe('Utils:Math Tests', () => {
  it('sum(1, 2) should be 3', () => {
    expect(sum(1, 2)).equal(3);
  });
});
