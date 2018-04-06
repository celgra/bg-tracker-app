import React from 'react';
import AddButton from './AddButton';
import renderer from 'react-test-renderer';

test('Button', () => {
  const component = renderer.create(
    <AddButton css={'test'} isAddingResult={true}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});