function compareValues(aVal, bVal, direction) {
  if (aVal < bVal) {
      return -1 * direction;
    } else if (bVal < aVal) {
      return 1 * direction;
    } else {
      return 0;
    }
}

function getBasicComparator(reverse) {
  const direction = reverse
    ? -1
    : 1;
  return (a, b) => compareValues(a, b, direction);
}

function getFieldComparator(field, reverse) {
  const direction = reverse
    ? -1
    : 1;
    return (a, b) => compareValues(a[field], b[field], direction);
}

function basicSort(collection, reverse) {
  const comparator = getBasicComparator(reverse);
  return collection.sort(comparator);
}

function sortByField(collection, field, reverse) {
  const comparator = getFieldComparator(field, reverse);
  return collection.sort(comparator);
}

const STRATEGY = {
  BASIC: basicSort,
  SINGLE_FIELD: sortByField,
};

function getStrategy(...args) {
  switch (args.length) {
    case 1:
      return STRATEGY.BASIC;
    case 2: {
      const [, b] = args;
      return (typeof b === 'boolean')
        ? STRATEGY.BASIC
        : STRATEGY.SINGLE_FIELD;
    }
    case 3:
      return STRATEGY.SINGLE_FIELD;
  }
}

function sortStrategy(...args) {
  return getStrategy(...args)(...args);
}

export default sortStrategy;
