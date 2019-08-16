import React from 'react';
import DefaultContent from './DefaultContent';

import renderer from 'react-test-renderer';

describe('DefaultContent UI', () => {
	it('<DefaultContent /> must have the snapshot version.', () => {
		const tree = renderer.create(<DefaultContent />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
