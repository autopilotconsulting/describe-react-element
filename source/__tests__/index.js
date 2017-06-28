import DescribeReactElement from '../index';

import describeReactElement from '../lib/describeReactElement';
import propertiesForElement from '../lib/propertiesForElement';

it('should export the describe element methods', () => {
  expect(DescribeReactElement.describeReactElement).toBe(describeReactElement);
  expect(DescribeReactElement.propertiesForElement).toBe(propertiesForElement);
});