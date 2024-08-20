let num = [2, 13, 5, 6, 3, 9, 10, 4, 8, 28, 65];
for (i = 0; i < num.length; i++) {
    console.log(num[i]);
}
const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 20 && arr[i] > 8) {
        console.log(arr[i]);
    }
}
const temp = [4, 7, 9, 2, 10, 12, 24, 50];
let min = temp[0];
for (let i = 0; i < temp.length; i++) {
    if (min > temp[i]) {
        min = temp[i];
    }
}
console.log(min);

const sum = [2, 4, 5, 6, 1];
let index = 2;
let update = 3;
if (index >= 0 && index < sum.length) {
    sum[index] = update;
}
console.log(sum);

let words = ["Ford", "Nissan", "Hunda", "Tesla", "Mercedes", "volvo"];
let Lengthword = 0;
let maxlengthword = "";
for (let i = 0; i < words.length; i++) {
    if (words[i].length > Lengthword) {
        maxlenghtWord = words[i];
        Lengthword = words[i].length;
    }
}
console.log("Самое длинное слово:", maxlenghtWord);
