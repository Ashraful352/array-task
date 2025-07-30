let friends = ['kalam', 'imran', 'sabit', 'ashraful', 'shuboj'];
let numbers = [30, 50, 60, 70, 80, 20, 90, 55];

// we can change any element of array this process follow 

numbers[4] = 2000;
friends [3] = 'boss';

console.log(friends);
console.log(numbers);

// we can find length of arry that's meant total element of array .

console.log(friends.length);
console.log(numbers.length);

// thisway index that's mean find single value of array

console.log(numbers[4]);
console.log(friends[3]);

//0r this way we can find array pisition element.

let three = numbers[2];
console.log (three);

// we can any new element add in a array will be last of the array list

numbers.push(3000);
console.log(numbers);

friends.push('sharmin');
console.log(friends);

//  we can follow this way cut last of the element of array 

numbers.pop(3000);
console.log(numbers);

friends.pop('sharmin');
console.log(friends);

// we can add and remove first element of a array following way

numbers.shift();
friends.unshift('ashraful');

console.log(numbers);
console.log(friends);

// check element of a array ( output true or false)

console.log(numbers.includes(7000));
console.log(friends.includes('ashraful'));

// in this way we can know element of position in a array

console.log(friends.indexOf('ashraful'));
console.log(numbers.indexOf(20));

// Following this way we can check this arroy or not

let ashraful = ('kamal', 'jamal')

console.log(Array.isArray(friends));
console.log(Array.isArray(numbers));
console.log(Array.isArray(ashraful));

//  convert an array into a single string

let names = ['shofik', 'jamal', 'solimoddin']
let result = names.join(',')
console.log(result)


let boys = ['jaml', 'kamal', 'kurim'];
let girls = ['sofia', 'robia', 'akhimoni'];
let allmembers = boys.concat(girls);
console.log(allmembers);



// know about this by google and chatgpt

// join(), concat(), slice(), splice()





