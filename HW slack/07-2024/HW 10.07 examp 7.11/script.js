let user = {
    Name: 'Ghays',
    Age: 45,
}
console.log(`Имя: ${user.Name} , Возрост: ${user.Age}`)
console.log('имя :', user.Name + '  , ' + 'возрост :', user.Age)
//////////////////////////////////////////
const book1 = {
    title: 'война и Мир',
    author: 'Лев Тольстой',
}
const book2 = {
    title: 'Мавка',
    author: 'Леса Украинка',
}
const book3 = {
    title: 'Евгений Онегин',
    author: ' Александр Пушкин',
}
const Books = [book1,book2,book3]
Books.forEach(book => { 
    console.log(`Название: ${book.title}`); 
    console.log(`Писатель: ${book.author}`); 
} 
)
////////////////////////////////////////////
const rectangle = {
    a: 10,
    b: 35,
}
rectangle.s= rectangle.a * rectangle.b;
rectangle.p= (rectangle.a + rectangle.b) *2;
console.log(`Площадь: ${rectangle.s}`);
console.log(`Периметр: ${rectangle.p}`)
///////////////////////////////////////////////////
const fruits = [
    {name: 'Виноград' , color: 'красный'},
    {name: 'Банан' , color: 'желтый'},
    {name: 'Яблоко' , color: 'красный'},
    {name: 'Вишня' , color: 'красный'},
    {name: 'Груша' , color: 'желтый'},
]
fruits.forEach(fruit => {
    if(fruit.color=== 'красный') {
        console.log(`Название: ${fruit.name}`)
        console.log(`Цвет: ${fruit.color}`)
    }
})
////////////////////////////////////////////////////

const playlist = [
    {name : 'be my baby', artist: 'the Ronettes', year: '1963'},
    {name : 'live forever', artist: 'Oasis', year: '1994'},
    {name : 'wake up', artist: 'Arcade fire', year: '2005'},
    
]
playlist.forEach(song => {
    console.log(`Название: ${song.name}`); 
    console.log(`Исполнитель: ${song.artist}`); 
    console.log(`Год выпуска: ${song.year}`); 
})