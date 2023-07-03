function binary_search(arr, search) {
	let lower = 0;
	let upper = arr.length - 1;

	while (lower <= upper) {
		let midpoint = (upper + lower) / 2;
		let value_at_midpont = arr[midpoint];

		if (search == value_at_midpont) {
			return midpoint;
		} else if (search < value_at_midpont) {
			upper = midpoint - 1;
		} else if (search > value_at_midpont) {
			lower = midpoint + 1;
		}
	}
}

console.log(binary_search([13, 17, 30, 75, 80, 100, 202], 100));
