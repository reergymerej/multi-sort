import { expect } from 'chai';
import app from '../src';

describe('a simple sort', () => {
	it('should sort ascending', () => {
		const input = [5, 4, 3, 2, 1];
		const actual = app(input);
		const expected = [1, 2, 3, 4, 5];
		expect(actual).to.eql(expected);
	});
});
