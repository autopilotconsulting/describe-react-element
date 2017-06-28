import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

import describeReactElement from '../lib/describeReactElement';

function Kid(props) {
  return (<div name={props.name} />);
}

class Family extends React.Component {
  render() {
    return (
      <div className='family'>
        <Kid name={this.props.sister} />
        <Kid name={this.props.brother} />
      </div>
    )
  }
}

describe('describeReactElement', () => {
  it('should return a tag description with the element name', () => {
    const element = <div />;
    const description = describeReactElement(element);

    expect(description).toEqual('<div />');
  });

  it('should output properties', () => {
    const element = <div name='hatch' awesome={true} />;
    const description = describeReactElement(element);

    expect(description).toEqual("<div name='hatch' awesome='true' />");
  });

  it('should output child elements', () => {
    const element = (
      <div name='pip' adorbs={true}>
        <h1>Permanent Excitement!!</h1>
        <h2 />
      </div>
    );
    const description = describeReactElement(element);

    expect(description).toEqual(
      [
        "<div name='pip' adorbs='true'>",
        "  <h1>",
        "    Permanent Excitement!!",
        "  </h1>",
        "  <h2 />",
        "</div>"
      ].join('\n')
    );    
  });

  it('does not have output for missing children', () => {
    let potentiallyAnElement;

    const element = (
      <ul>
        {false && <li />}
        {potentiallyAnElement}
      </ul>
    );
    const description = describeReactElement(element);

    expect(description).toEqual(
      [
        "<ul>",
        "</ul>"
      ].join('\n')
    );
  });

  it('should describe react components', () => {
    const element = <Family name='pippy' />;
    const description = describeReactElement(element);

    expect(description).toEqual("<Family name='pippy' />");
  });

  it('should describe rendered react components', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Family sister='pippy' brother='hatch' />);

    const element = renderer.getRenderOutput();
    const description = describeReactElement(element);

    expect(description).toEqual(
      [
        "<div className='family'>",
        "  <Kid name='pippy' />",
        "  <Kid name='hatch' />",
        "</div>"
      ].join('\n')
    )
  });

  it('should describe shallow rendered react components', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Family sister='pippy' brother='hatch' />);

    const element = renderer.getRenderOutput();
    const description = describeReactElement(element);

    expect(description).toEqual(
      [
        "<div className='family'>",
        "  <Kid name='pippy' />",
        "  <Kid name='hatch' />",
        "</div>"
      ].join('\n')
    )
  });
});