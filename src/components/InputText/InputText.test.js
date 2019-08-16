import React from 'react';
import InputText from './InputText';

import renderer from 'react-test-renderer';

describe('InputText UI', () => {
	it('<InputText /> must have the snapshot version.', () => {
		const tree = renderer.create(<InputText />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
