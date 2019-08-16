import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import {
	onChangeSearchInput,
	onKeyPressSearchInput,
	onClickSearchButton,
	searchResult
} from './App';

configure({ adapter: new Adapter() });

// Application

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

// Functions

it('() => onChangeSearchInput() should be a function ', () => {
	expect(() => onChangeSearchInput()).to.be.a('function');
});

it('() => onKeyPressSearchInput() should be a function ', () => {
	expect(() => onKeyPressSearchInput()).to.be.a('function');
});

it('() => onClickSearchButton() should be a function ', () => {
	expect(() => onClickSearchButton()).to.be.a('function');
});

it('() => searchResult() should be a function ', () => {
	expect(() => searchResult()).to.be.a('function');
});

// Initial states

describe('Initial states', () => {
	it('should return initial states correctly', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.state('api')).to.be.equal(null);
		expect(wrapper.state('apiStatus')).to.be.equal(null);
		expect(wrapper.state('valueOfSearchInput')).to.be.equal('');
		expect(wrapper.state('inputValue')).to.be.equal('');
	});
});
