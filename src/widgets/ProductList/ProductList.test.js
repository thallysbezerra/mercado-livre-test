import { expect } from 'chai';
import { showProductDetails, productDetailsResult } from './ProductList';

it('() => showProductDetails() should be a function ', () => {
	expect(() => showProductDetails()).to.be.a('function');
});

it('() => productDetailsResult() should be a function ', () => {
	expect(() => productDetailsResult()).to.be.a('function');
});
