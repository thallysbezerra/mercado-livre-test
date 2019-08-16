import React from 'react';
import Header from './Header';

import renderer from 'react-test-renderer';

describe('Header UI', () => {
	it('<Header /> must have the snapshot version.', () => {
		const tree = renderer.create(<Header />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
