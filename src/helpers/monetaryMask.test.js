import monetaryMask from './monetaryMask';
import { expect } from 'chai';

it('() => monetaryMask() should be a function ', () => {
	expect(() => monetaryMask()).to.be.a('function');
});

it('monetaryMask(8) should return "$ 8"', () => {
	expect(monetaryMask(8)).to.be.equal('$ 8');
});

it('monetaryMask(45) should return "$ 45"', () => {
	expect(monetaryMask(45)).to.be.equal('$ 45');
});

it('monetaryMask(390) should return "$ 390"', () => {
	expect(monetaryMask(390)).to.be.equal('$ 390');
});

it('monetaryMask(1250) should return "$ 1.250"', () => {
	expect(monetaryMask(1250)).to.be.equal('$ 1.250');
});

it('monetaryMask(63000) should return "$ 63.000"', () => {
	expect(monetaryMask(63000)).to.be.equal('$ 63.000');
});
