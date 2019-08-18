import React from 'react';
import Button from './Button';

import renderer from 'react-test-renderer';

describe('Button UI', () => {
	it('<Button /> must have the snapshot version.', () => {
		const tree = renderer.create(<Button />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
