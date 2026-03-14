let n = 4;
let size = 2 * n - 1;

for (let i = 0; i < size; i++) {
    let row = "";

    for (let j = 0; j < size; j++) {

        let top = i;
        let left = j;
        let bottom = size - 1 - i;
        let right = size - 1 - j;

        let minDistance = Math.min(top, left, bottom, right);

        row += (n - minDistance) + " ";
    }

    console.log(row.trim());
}