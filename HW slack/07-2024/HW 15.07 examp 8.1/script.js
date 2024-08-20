
// 1 .Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает произведение всех элементов массива. 
//Затем вызовите функцию и выведите результат в консоль.

const numbers = [2,3,4,5];
function myfun (arr){
    let count = 1;
    for ( let i =0 ; i< arr.length ; i++){
        count *= arr[i];
    }
    return count
}
 console.log(myfun(numbers));
//2 .Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл while для 
//подсчета суммы всех элементов массива.
let i = 0;
let sum =0;
while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  console.log(sum);

