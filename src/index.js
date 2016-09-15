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

function getFieldComparator(field, reverse = false) {
  const direction = reverse
    ? -1
    : 1;

  return (a, b) => {
    const aVal = a[field];
    const bVal = b[field];

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

function sortByField(collection, field, reverse) {
  const comparator = getFieldComparator(field, reverse);
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
      const field = options;
      return sortByField(collection, field, reverse);
    default:
  }
}

export default sortStrategy;
