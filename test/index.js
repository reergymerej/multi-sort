import { expect } from 'chai';
import app from '../src';

describe('a simple sort', () => {
  it('should sort ascending', () => {
    const input = [5, 4, 3, 2, 1];
    const actual = app(input);
    const expected = [1, 2, 3, 4, 5];
    expect(actual).to.eql(expected);
  });

  it('should sort descending', () => {
    const input = [1, 2, 3, 4, 5];
    const actual = app(input, true);
    const expected = [5, 4, 3, 2, 1];
    expect(actual).to.eql(expected);
  });
});

describe.only('sorting objects by a single property', () => {
  it('should sort ascending', () => {
    const input = [
      { name: 'c' },
      { name: 'b' },
      { name: 'a' },
    ];
    const field = 'name';
    const actual = app(input, field);
    const expected = [
      { name: 'a' },
      { name: 'b' },
      { name: 'c' },
    ];
    expect(actual).to.eql(expected);
  });


  xit('should sort descending', () => {
    const input = [1, 2, 3, 4, 5];
    const actual = app(input, true);
    const expected = [5, 4, 3, 2, 1];
    expect(actual).to.eql(expected);
  });
});
