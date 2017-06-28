export default function(element) {
  const props = { };

  if (element.key) { props.key = element.key }
  for (const key in element.props) { 
    props[key] = element.props[key]; 
  }

  return props;
}