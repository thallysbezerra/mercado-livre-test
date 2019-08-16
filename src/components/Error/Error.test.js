import React from 'react';
import Error from './Error';

import renderer from 'react-test-renderer';

describe('Error UI', () => {
	it('<Error /> must have the snapshot version.', () => {
		const tree = renderer.create(<Error />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
