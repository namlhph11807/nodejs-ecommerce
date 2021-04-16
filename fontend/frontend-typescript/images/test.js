// var a = 10
// if(a){
//     const a = 20
//     console.log(a)
// }

// console.log(a);
// const maArr = [1,2,3,4];
// myArr = 10;
// console.log [myArr];

// const longestWord = (str) => {
//     // chuyen doi chuoi thanh mang, spill("")
//     const words = str.splist ("");
//     let longestkeyWord = "";
//     for (const word of word){
//         if (word.length > longestkeyWord.length){
//             longestkeyWord = word;
//         }
//     }
//     return longestkeyWord;
//     // su dung vong lap for hoac for of, for each
//     // check do dai cua ky tu. leangth
// }
// console.log( longestkeyWord('ten em la Van Minh'));

// arr function

// function sum(a,b){ // function declarration
//     return a+b;
// }
// console.log (sum(3,4));
// //
// const sum2 = function (a,b){ // function express
//     return a+b;
// }
// console.log (sum2(3,4));
// //
// const sum3 = (a,b)  => a + b; // function arrow

// console.log (sum3(3,4));

// spread operator

// const names = ["minh", "the anh", "nam"];
// const myNames = "nam";


// const newNames = [...names, ...myNames];

// // mutation
// console.log(names); // old
// console.log(names, myNames); //new

let $ = document.querySelector.bind.document;

const product = [
    { id: 1, name: 'product 1' },
    { id: 2, name: 'product 2' },
    { id: 3, name: 'product 3' },
];

$('.form-add').addEventListener('submit', (e) => {
    e.preventDefault();

    const product = {
        id: 4,
        name: $('#product-name').value
    }
})

