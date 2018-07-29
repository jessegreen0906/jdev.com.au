import Page from '../../src/components/page';
import React from 'react';
import renderer from 'react-test-renderer';

test('should render', function () {
	const component = renderer.create(
		<Page />,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

// test('Expect the obvious', function() {
// 	expect(1).toEqual(1);
// });