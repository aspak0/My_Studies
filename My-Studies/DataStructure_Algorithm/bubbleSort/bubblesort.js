const bubbleSort = (arr) => {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let swap = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = swap;
				swapped = true;
			}
		}
	} while (swapped);
};

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); //[-6, -2, 4, 8, 20];
