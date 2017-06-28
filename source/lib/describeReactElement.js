import propertiesForElement from './propertiesForElement';
import flatten from 'array-flatten';

function describeReactElement(element, indentation = 0) {
  const indention = ' '.repeat(indentation * 2);

  if (typeof(element) === 'string') {
    return `${indention}${element}`;
  }

  if (typeof(element) === 'undefined') { return; }
  if (element === false) { return; }

  const elementName = element.type.name || element.type;

  const {children: elementChildren, ...elementProperties} = propertiesForElement(element);
  const properties = Object.keys(elementProperties).map((key) => {
    return `${key}='${elementProperties[key]}'`;
  });

  const tagIntroduction = [elementName, ...properties].join(' ');

  if (elementChildren) {
    const children = flatten([elementChildren]);
    const childDescriptions = children.map((childElement) => {
      return describeReactElement(childElement, indentation + 1);      
    }).filter((description) => typeof(description) === 'string');

    return [
      `${indention}<${tagIntroduction}>`,
      ...childDescriptions,
      `${indention}</${elementName}>`
    ].join("\n");
  } else {
    return `${indention}<${tagIntroduction} />`;
  }
}

export default describeReactElement;