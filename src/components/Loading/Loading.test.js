import React from 'react';
import Loading from './Loading';

import renderer from 'react-test-renderer';

describe('Loading UI', () => {
	it('<Loading /> must have the snapshot version.', () => {
		const tree = renderer.create(<Loading />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
