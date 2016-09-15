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

const STRATEGY = {
  BASIC: 'BASIC',
};

function getStrategy(...args) {
  const [a, b, c] = args;

  if (args.length === 1) {
    return STRATEGY.BASIC;
  } else if (args.length === 2) {
    if (typeof b === 'boolean') {
      return STRATEGY.BASIC;
    } else if (typeof b === 'string') {
      return STRATEGY.BASIC_FIELD;
    }
  }
}

function sortStrategy(...args) {
  const strategy = getStrategy(...args);

  switch (strategy) {
    case STRATEGY.BASIC:
      return basicSort(...args);
    case STRATEGY.BASIC_FIELD:
      return sortByField(...args);
  }
}

export default sortStrategy;
