// function sum(a, b) {
//     return a + b;
// }
function calc(fx, a, b) {
    return fx(a, b);
}
// console.log(calc(sum, 4, 5));
// let myarray1 = [1, 2, 3, 4, 5];
// myarray1.forEach((element, index) => {
//     myarray1[index] = element * element;
// });
 console.log(myarray1);
 let myarray2 = [1, 2, 3, 4, 5];
 myarray2.map((element, index) => {
     myarray2[index] = element * element;
 });
// console.log(myarray2);
 let myarray1 = [1, 2, 3, 4, 5];
 const returnValue = myarray1.forEach((element) => {
     return element * element;
 });
 console.log(returnValue);
 let myarray2 = [1, 2, 3, 4, 5, 6];
 const returnValues = myarray2.map((elements) => {
     return elements * elements;
 });
//console.log(returnValues);

// const students = [
//     { name: "harry", subject: "javascript" },
//     { name: "Rohan", subject: "Maching learning" }
// ]

// const enrollstudent = (student, callback) => {
//     setTimeout(function () {
//         students.push(student);
//         console.log('First function');
//         callback();
//     }, 3000);
// }

// const getStudents = () => {
//     setTimeout(function () {
//         students.forEach(function (student) {
//             console.log('student name ', student.name);
//         })
//     }, 1000);
// }

// let newStundent = { name: "Sunny", subject: "python" }
// enrollstudent(newStundent, getStudents);
//getStudents();


////////////promise////////////////////////////////

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (error) {
                console.log('Function: Your promise has been resolved');
                resolve('Yeeee party time');
            } else {
                console.log('Function: Your promise has not been resolved');
                reject('Its not working shit yrrr');
            }
        }, 2000);
    })
}

func1().then((test) => {
    console.log("Mayank its working " + test)
}).catch((error) => {
    console.log('Catch block ' + error)
})
