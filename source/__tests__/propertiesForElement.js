import React from 'react';
import propertiesForElement from '../lib/propertiesForElement';

describe('propertiesForElement', () => {
  it('should return a hash of properties', () => {
    const element = <div name='pippy' />;
    const properties = propertiesForElement(element);

    expect(properties).toEqual({ name: 'pippy' });
  });

  it('should return the element key', () => {
    const element = (
      <ul>
        {[<li value='1' name='pippy' key={1} />]}
      </ul>
    );

    const item = element.props.children[0];
    const properties = propertiesForElement(item);

    expect(properties).toEqual({ key: '1', name: 'pippy', value: '1' });
  });
});