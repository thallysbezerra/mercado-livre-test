import { expect } from 'chai';
import { buyProduct } from './ProductDetails';

it('() => buyProduct() should be a function ', () => {
	expect(() => buyProduct()).to.be.a('function');
});
