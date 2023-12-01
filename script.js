// toString() =>

// const bikes = ["yamaha","Bajaj","Honda","TVS"];
// console.log(bikes);
// console.log(bikes.toString());


//  join() method:

// const bikes = ["yahama","Bajaj","Honda","TVS"];
// console.log(bikes);

// 1st part
// console.log(bikes.join());
// output: "yahama,Bajaj,Honda,TVS"
// 2nd part
// delimiter => ""
// console.log(bikes.join(""));
// output: "yahamaBajajHondaTVS"

// 3rd part
// console.log(bikes.join("-"));
// output: "yahama-Bajaj-Honda-TVS"

// pop() method:
// let bikes = ["yamaha","Bajaj","Honda","TVS"];
// console.log(bikes);
// console.log(bikes.pop());
// console.log(bikes);

// using toString() method and join() method:

// console.log(bikes.toString());
// console.log(bikes.join(" "));


// push():
// let bikes = ["yamaha","Bajaj","Honda","TVS"];
// console.log(bikes);
// console.log(bikes.push("Ducatti","Royal Enfield"));
// console.log(bikes);

// // making use of pop() , toString() , join() methods 
// console.log(bikes.pop())
// console.log(bikes.toString());
// console.log(bikes.join(" "));


// // shift()

// let bikes = ["yamaha","Bajaj","Honda","TVS"];
// console.log(bikes);

// console.log(bikes.shift());
// // yamaha
// console.log(bikes);
// // [ 'Bajaj', 'Honda', 'TVS' ]

// // applying pop(),push(),toString(),join() methods
// // pop()
// console.log(bikes.pop());
// console.log(bikes);
// // push():
// console.log(bikes.push("Honda","Hero"));
// console.log(bikes);
// // toString()
// console.log(bikes.toString());
// // join()
// console.log(bikes.join("* "));

// // unshift()
// const bikes = ["Bajaj","honda","Ducatti","Royal Enfied"];
// console.log(bikes.unshift("BMW","Kawasaki"));
// console.log(bikes);

// // applying shift(), pop(), push(), toString(), join():

// // shift()
// console.log(bikes.shift());
// console.log(bikes);
// // pop()
// console.log(bikes.pop());
// console.log(bikes);
// // push()
// console.log(bikes.push("Royal Enfield"));
// console.log(bikes);
// // toString()
// console.log(bikes.toString());

// // join()
// console.log(bikes.join("**"));


// //delete -> syntax: delete array[index];

// const fruits  = ["banana","apple","graps"];
// console.log(fruits);
// // [ 'banana', 'apple', 'graps' ]
// delete fruits[1];
// console.log(fruits);
// // [ 'banana', <1 empty item>, 'graps' ]

// // applying the first set unshift(),shift(), pop(),push(), toString(), join();
// console.log(fruits.unshift("orange","straberry"));
// console.log(fruits);
// // shift() -> removes elemnts from the front 

// console.log(fruits.shift());
// console.log(fruits);

// // pop()

// console.log(fruits.pop());
// console.log(fruits);

// // push()
// console.log(fruits.push("graps","apple"));
// console.log(fruits);

// // toString()
// console.log(fruits.toString());

// // join()
// console.log(fruits.join("**"));

// // delete
// delete fruits[0];
// console.log(fruits);

// // concat():
// let arr1 = [1,3,2];
// let arr2 = [23,33,45];
// let arr3 = [12,334,545];

// let arr = arr1.concat(arr2,arr3);
// console.log(arr);
// let arr5 = arr2.concat(arr1,arr);
// console.log( arr5);

// // applying delete arr[index], unshift(),shift(),pop(),push(),toString(),join();
// // unshift
// console.log(arr5.unshift(99,100,101));
// console.log(arr5);

// // shift
// console.log(arr5.shift());
// console.log(arr5);

// // push()
// console.log(arr5.push(111,222,333));
// console.log(arr5);

// // pop()
// console.log(arr5.pop());
// console.log(arr5);

// // toString()
// console.log(arr5.toString());
// console.log(arr5);

// // join
// console.log(arr5.join("+"))
// console.log(arr5);

// for (let i=0;i<arr5.length;i++){
//     delete arr5[i]
    
// }
// console.log(arr5);

// // sort() method:
// let arr = [99,32,23,43,53];
// // console.log(typeof arr[0]);
// // console.log(arr);
// // console.log(arr.sort());
// // console.log(typeof arr[0]);

// let str = ["zebra","year","van","apple"];
// // console.log(str);
// // console.log(typeof str[0]);
// // console.log(str.sort());
// // let bol = [true,false];
// // console.log(bol.sort());
// // console.log(typeof bol[0]);

// // using the methods concat(), push(),pop(), unshift(),shift(), toString(), join(), delete arr[index];
// // concat()
// let new_arr = arr.concat(str);
// console.log(new_arr);
// // push()

// console.log(new_arr.push("somesh","deshmukh",9588));
// console.log(new_arr);
// // pop()
// console.log(new_arr.pop());
// console.log(new_arr);

// // unshift()
// console.log(new_arr.unshift("newYear","dasara","hanuman"));
// console.log(new_arr);

// // shift()
// console.log(new_arr.shift())
// console.log(new_arr);
// // toString()
// console.log(new_arr.toString());
// console.log(new_arr);

// // join()
// console.log(new_arr.join("-*"));
// console.log(new_arr);

// // delete arr[index];

// console.log(delete new_arr[1]);
// console.log(new_arr);

// splice -> this method is used to added or remove elements

// let arr= [99,32,23,43,53,100];
// // console.log(arr);
// console.log(arr.splice(2,3,"a","b","c"));
// // console.log(arr);

// // sort():
// console.log(arr.sort());
// // [ 100, 32, 99, 'a', 'b', 'c' ]
// // this is because of asci value of 1 is compared with 3 and 9 then 1 comes first and 3 comes next and 9.

// console.log(arr);

// // concat()
// let arr1 = [1,3,4];
// console.log(arr1);
// arr2 = arr1.concat(arr);
// console.log(arr2);

// // shift()
// console.log(arr2.shift());
// console.log(arr2);
// // unshift()
// console.log(arr2.unshift(200,300,400));
// console.log(arr2);
// // pop()
// console.log(arr2.pop())
// console.log(arr2);

// // push()
// console.log(arr2.push("somesh","Deshmukh"));
// console.log(arr2);

// // join()
// console.log(arr2.join("*+"));
// console.log(arr2);



// // toString()
// console.log(arr2.toString());
// console.log(arr2);

// // delete arr[index]
// console.log(delete arr2[0]);
// console.log(arr2);

// // splice
// console.log(arr2.splice(2,2,"a","b"));
// console.log(arr2);

// // slice() -> slices out a piece from an array, it create a new array.
// let numbers = [1,2,3,4,5];
// console.log(numbers);
// // [ 1, 2, 3, 4, 5 ]
// console.log(numbers.slice(1,4));
// console.log(numbers);

// // applying all other methods splice(), sort(), concat(),shift(), unshift(), pop(),push(), delete arr[index],toString(),join().
// // splice():
// console.log(numbers.splice(1,2,"a","b"));
// console.log(numbers);
// // [ 1, 'a', 'b', 4, 5 ]

// // sort()
// console.log(numbers.sort());
// console.log(numbers);

// // concat()
// let arr2 = ["c","d"];
// let new_arr = numbers.concat(arr2);
// console.log(new_arr);
// // [
// //   1,   4,   5,   'a',
// //   'b', 'c', 'd'
// // ]
// // shift()

// console.log(new_arr.shift());
// console.log(new_arr);
// // [ 4, 5, 'a', 'b', 'c', 'd' ]

// // unshift();
// console.log(new_arr.unshift(1,2,3));
// console.log(new_arr);
// // [1,2,3,4,5,'a','b','c','d']

// // push()
// console.log(new_arr.push('e','f'));
// console.log(new_arr);

// // pop()
// console.log(new_arr.pop());
// console.log(new_arr);
// // toString()
// console.log(new_arr.toString());
// console.log(new_arr);

// // join()
// console.log(new_arr.join("-"));
// console.log(new_arr);

// // delete arr[index];
// for(let i=0;i<new_arr.length;i++){
//     console.log(delete new_arr[i]);

// }

// console.log(new_arr);

// reverse(): this method reverse the order of the elements in the array.

// let numbers = [1,2,3,8,9];
// console.log(numbers.reverse());
// // [ 9, 8, 3, 2, 1 ]

// let str = ['a','c','d','e','z'];
// console.log(str.reverse());

// // applying methods slice(), splice(), concat(), sort(), unshift(),shift(), pop(), push(), toString(), join(), delete arr[index];
// // slice()
// console.log(numbers.slice(2,5));
// // [ 3, 2, 1 ]
// // splice()
// console.log(numbers.splice("0",))

// isArray() -> it tells whether an object is an array or not.

// let number = [1,2,3,4,5];
// let str = "deshmukh";

// console.log(number);

// console.log(Array.isArray(number));
// console.log(str);
// console.log(Array.isArray(str));

// // reverse()
// console.log(number.reverse());
// // [ 5, 4, 3, 2, 1 ]
// console.log(number);
// // console.log(str.reverse());
// // console.log(str);
// // reverse() method is of that of arrays and not for string.

// // slice()
// console.log(number.slice(1,3));
// // [ 4, 3 ]

// // splice()
// console.log(number.splice(2,2,"a","b"));
// console.log(number);

// // sort()
// console.log(number.sort());
// // [ 1, 4, 5, 'a', 'b' ]

// // concat()
// number2 = [6,7,8,9,10];
// console.log(number2);

// let number3 = number.concat(number2);
// console.log(number3);
// // [
// //     1, 4, 5, 'a', 'b',
// //     6, 7, 8, 9,   10
// // ]

// // shift()
// console.log(number3.shift());
// console.log(number3);

// // unshift()
// console.log(number3.unshift("somesh","deshmukh","shivkumar"));
// console.log(number3);

// // push()
// console.log(number3.push("raj",3,"patil"));
// console.log(number3);

// // pop()
// console.log(number3.pop())
// console.log(number3);

// delete arr[index];
// for(let i=0;i<number3.length;i++){
//     delete number3[i];
// }

// console.log(number3);

// isArray() -> it is used to check whether an object is an array or not if an array it will return true and 

// indexOf() => it is going to return the first index of the specified element.
// syntax for indexOf() is as follows -> array.indexOf("element",index);
// index from where to find.

// let elements = ["bottle","pen","paper","iphone"];
// console.log(elements.indexOf("pen",2));

// // isArray():

// console.log(Array.isArray(elements));

// // slice():
// console.log(elements.slice(2,4));

// // splice():
// console.log(elements.splice(1,2,"pencil","NeclearBomb"));
// console.log(elements);

// // concat()
// elements2 = [1,3,5,8,10];
// elements3 = elements.concat(elements2);
// console.log(elements3);

// // sort()
// console.log(elements3.sort());

// // [ 1, 10, 3, 5, 8, 'NeclearBomb', 'bottle', 'iphone', 'pencil' ]

// // push()
// console.log(elements3.push("somesh","raj"));
// console.log(elements3);

// // pop()
// console.log(elements3.pop());

// // unshift()
// console.log(elements3.unshift("somesh","raj"));
// console.log(elements3);


// // shift()

// console.log(elements3.shift());
// console.log(elements3)


// // reverse()

// console.log(elements3.reverse());
// console.log(elements3);

// lastIndexOf():
// lastIndexOf() is an string() method.
//     let elements = ["laptop","raj","Mobile","Headset","Mobile","Router"];
//     console.log(elements);
// // indexOf():
//     // console.log(elements.indexOf("Mobile",2));
// // lastIndexOf():
// console.log(elements.lastIndexOf("Mobile",4));
// here i am saying start your search from the 4 index and move to the from right to left:

// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet");
// console.log(result);

// let text = "how are you somesh is my name and how are you somesh";
// console.log(text.lastIndexOf("somesh",10));

// indexing is done as usual just we go from right to left.


// find() method:

// const arr = [5,10,15,2,33,133];
// // console.log(arr);

// arr.find((num)=> {
// if(num>33){
// console.log(num);
// }
// })

// const arr = ["deshmukh","somesh","BC","Darshana"];
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);


// }

// arr.find((i)=>{
//    if(i=="somesh"){
//     console.log(arr.indexOf(i))
//    }

// })

// findIndex()

// const arr1 = [5,12,108,113,123];
// let isLargeNumber = (element)=> element >122;
// console.log(arr1.findIndex(isLargeNumber));


// // find()
// let smallestNum = arr1.find((el)=>{
//     if(el <12){
//         return el;
//     }
// })

// console.log(`smallest number is: ${smallestNum}`);


// includes() -> this method will return true if the element is present in the array or elese it will return false.

// syntax : arr.includes(element, start)

// const arr = [1,2,3,5,6,8];
// console.log(arr);

// const result = arr.includes(8);
// console.log(result);
// const result1 = arr.includes(0);
// console.log(result1);

// // find the index of 8


// const res = (element)=> element >7;

// console.log(arr.findIndex(res));

// find()
// arr.find((ele)=>{
//     if(ele == 8){
//         console.log("we found the element");
//     }
//     else{
//         console.log("element is not present");
      
//     }
// })

// entries() -> array iterator object with key/value pairs. It doesn't change the original array.
// const days =['sun','mon','tue','wed','thu','fri','sat'];
// const day = days.entries()

// console.log(day);

// for(let x of day){
//     console.log(x + "\n" );

// }

// // include()

// console.log(days.includes("mon"));

// // findIndex()

// let dayx = (el) => {
//     if(el=='thu'){
//     return el;
//     }
// }

// console.log(days.findIndex(dayx));

// every: 

// const arr = [1,30,22,56,23,54,830];

// let is_below = (currentValue) => currentValue < 900;

// console.log(arr.every(is_below));

// let is_above = (currentValue) => currentValue > 800;
// console.log(arr.every(is_above));

// have faith in yourself , always belive in yourself. don't think a lot eat a lot what ever is placed in fornt of you.

// fill():

// const fruits = ["apple","graps","oranges","pinapple"];
// fruits.fill("kiwi");
// console.log(fruits);

// const fruits = ["apple","graps","oranges","pinapple"];
// fruits.fill("kiwi",2,4);
// console.log(fruits);

// const fruits = ["banana","orange","apple","mango"];
// console.log(fruits);
// fruits.copyWithin(2,0);
// console.log(fruits);


const fruits = ["Banana","Orange","Apple","Mango","KIwi","Papaya"];
console.log(fruits.copyWithin(2,0,2))






























