function getBasicComparator(reverse = false) {
  const direction = reverse
    ? -1
    : 1;

  return (a, b) => {
    const aVal = a;
    const bVal = b;

    if (aVal < bVal) {
      return -1 * direction;
    } else if (bVal < aVal) {
      return 1 * direction;
    } else {
      return 0;
    }
  };
}


function basicSort(collection, reverse = false) {
  const comparator = getBasicComparator(reverse);
  return collection.sort(comparator);
}

function sortStrategy(...args) {
  const [collection, options] = args;
  const type = typeof options;

  switch (type) {
    case 'undefined':
    case 'boolean':
      const reverse = options;
      return basicSort(collection, reverse);
      break;
    case 'string':
      return [1,2,3];
    default:
  }
}

export default sortStrategy;
