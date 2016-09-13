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

function sort(collection, reverse = false) {
	const comparator = getBasicComparator(reverse);
	return collection.sort(comparator);
}

export default sort;
