console.log('Welcome to tutorial 49');

//object dynamic values`

// let obj = {
//     age: 12,
//     name: 'Rahul'
// }
// Output:
// console.log("First obj 1 normal ", obj);

// // cloning an object
// let obj2 = Object.assign({}, obj);

// // Output:
// console.log("object 2 clon using assign op:", obj2); 

// // cloning an object using spread operator
// let obj3 = {...obj, ...obj2};
// obj3.age = 100;

// // Output:
// console.log("Object 3 clon using spread op:  ", obj3);


//iterating an object

let student = {
    name: 'Rahul',
    age: 23,
    marks: 100,
    subject: 'Maths'
}

let record = {};

// Output:  
console.log("Student details: ", student);

for( let key in student)
{
    let newKey = key;
    let newValue = student[key];

    //insert newKey and value in record and create a clone of student
    record[newKey]  = newValue;

}
//testing the record object
record['name'] = 'Ravi';

// Output:
console.log("Record: ", record);