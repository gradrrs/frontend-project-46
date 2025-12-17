const formatValue = (value) => {
  if (typeof value !== 'object' || value === null) {
    return String(value);
  }
  return '[complex value]';
};

const formatDiff = (diffArray) => {
  const lines = diffArray.map((item) => {
    const { key, status, value } = item;
    const formattedValue = formatValue(value);
    switch (status) {
      case 'unchanged':
        return `  ${key}: ${formattedValue}`;
      case 'added':
        return `+ ${key}: ${formattedValue}`;
      case 'removed':
        return `- ${key}: ${formattedValue}`;
      default:
        return '';
    }
  });
  return `{\n${lines.join('\n')}\n}`;
};

export default formatDiff;